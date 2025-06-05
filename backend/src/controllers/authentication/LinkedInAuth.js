
import axios from 'axios';
import User from '../../models/auth.js';
import { generateToken } from '../../utils/jwt.js';

// Helper to escape regex special characters
const escapeRegex = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const linkedInAuth = async (req, res) => {
  let state;
  
  try {
    const { code, state: stateParam } = req.query;
    state = stateParam;
    
    // Validate code
    if (!code || typeof code !== 'string') {
      return res.redirect(`${process.env.FRONTEND_URL}/signup?error=invalid_code`);
    }

    // Determine flow type
    const isLoginFlow = state === 'login';
    const isSignupFlow = state.startsWith('signup_');
    const role = isSignupFlow ? state.split('_')[1] : null;

    console.log('Starting LinkedIn auth flow:', { isLoginFlow, isSignupFlow, role });

    // 1. Exchange code for access token
    const tokenResponse = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      null,
      {
        params: {
          grant_type: 'authorization_code',
          code,
          redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        timeout: 15000
      }
    );

    // Handle token errors
    if (!tokenResponse.data.access_token) {
      console.error('LinkedIn token error:', tokenResponse.data);
      return res.redirect(`${process.env.FRONTEND_URL}/signup?error=invalid_token`);
    }

    const accessToken = tokenResponse.data.access_token;
    console.log('Access token obtained successfully');

    // 2. Get user info
    const userInfoResponse = await axios.get(
      'https://api.linkedin.com/v2/userinfo',
      {
        headers: { 
          Authorization: `Bearer ${accessToken}`,
          'X-Restli-Protocol-Version': '2.0.0'
        },
        timeout: 15000
      }
    );

    const userInfo = userInfoResponse.data;
    const email = userInfo.email?.toLowerCase();
    const linkedInId = userInfo.sub;
    
    // Validate required fields
    if (!email || !linkedInId) {
      console.error('Incomplete LinkedIn profile:', userInfo);
      return res.redirect(`${process.env.FRONTEND_URL}/signup?error=incomplete_profile`);
    }

    console.log('LinkedIn user info:', { email, linkedInId });

    // 3. Handle signup flow
    if (isSignupFlow) {
      // Escape email for regex
      const escapedEmail = escapeRegex(email);
      
      // Case-insensitive search
      const existingUser = await User.findOne({ 
        $or: [
          { email: { $regex: new RegExp(`^${escapedEmail}$`, 'i') } },
          { linkedInId }
        ] 
      });
      
      if (existingUser) {
        console.log('Existing user found:', existingUser.email);
        
        // Normalize emails for comparison
        const normalizedExistingEmail = existingUser.email.toLowerCase();
        const normalizedNewEmail = email.toLowerCase();
        
        if (normalizedExistingEmail === normalizedNewEmail) {
          return res.redirect(`${process.env.FRONTEND_URL}/signup?error=account_exists`);
        }
        if (existingUser.linkedInId === linkedInId) {
          return res.redirect(`${process.env.FRONTEND_URL}/signup?error=linkedin_used`);
        }
      }

      // Create new user with selected role
      const newUser = new User({
        linkedInId,
        firstName: userInfo.given_name || '',
        lastName: userInfo.family_name || '',
        email: email.toLowerCase(),
        userType: role || 'candidate',
        authProvider: 'linkedin'
      });

      await newUser.save();
      console.log('New user created via LinkedIn:', newUser);
      
      // Generate token and redirect to callback
      const token = generateToken(newUser);
      return res.redirect(
        `${process.env.FRONTEND_URL}/linkedin-signup-callback?token=${token}&userType=${newUser.userType}`
      );
    }

    // 4. Handle login flow
    if (isLoginFlow) {
      // Escape email for regex
      const escapedEmail = escapeRegex(email);
      
      // Find user by email or LinkedIn ID (case-insensitive)
      const user = await User.findOne({ 
        $or: [
          { email: { $regex: new RegExp(`^${escapedEmail}$`, 'i') } },
          { linkedInId }
        ]
      });
      
      if (!user) {
        console.log('User not found for login:', email);
        return res.redirect(`${process.env.FRONTEND_URL}/login?error=account_not_found`);
      }

      console.log('User found for login:', user.email);

      // Update LinkedIn ID if missing
      if (!user.linkedInId) {
        user.linkedInId = linkedInId;
        await user.save();
      }

      const token = generateToken(user);
      return res.redirect(
        `${process.env.FRONTEND_URL}/linkedin-login-callback?token=${token}&userType=${user.userType}`
      );
    }

    return res.redirect(`${process.env.FRONTEND_URL}/signup?error=invalid_flow`);

  } catch (error) {
    console.error('LinkedIn Auth Error:', {
      message: error.message,
      code: error.code,
      response: error.response?.data,
      stack: error.stack
    });
    
    let errorType = 'auth_failed';
    if (error.response?.data?.error === 'invalid_client') {
      errorType = 'invalid_client_credentials';
    } else if (error.message.includes('timeout')) {
      errorType = 'timeout';
    } else if (error.response?.status === 400) {
      errorType = 'invalid_code';
    } else if (error.code === 'ENOTFOUND') {
      errorType = 'dns_error';
    }

    // Determine redirect path
    const redirectPath = state?.startsWith('signup_') 
      ? '/signup' 
      : '/login';

    return res.redirect(`${process.env.FRONTEND_URL}${redirectPath}?error=${errorType}`);
  }
};