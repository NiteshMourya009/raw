// /// controllers/authentication/LinkedInAuth.js
// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// export const handleLinkedInCallback = async (req, res) => {
//   try {
//     const { code, state } = req.query;

//     // Step 6: Exchange code for access token
//     const tokenResponse = await axios.post(
//       'https://www.linkedin.com/oauth/v2/accessToken',
//       null,
//       {
//         params: {
//           grant_type: 'authorization_code',
//           code,
//           redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
//           client_id: process.env.LINKEDIN_CLIENT_ID,
//           client_secret: process.env.LINKEDIN_CLIENT_SECRET,
//         },
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     const accessToken = tokenResponse.data.access_token;

//     // Step 7: Use token to fetch user's profile
//     const [profileRes, emailRes] = await Promise.all([
//       axios.get('https://api.linkedin.com/v2/me', {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }),
//       axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }),
//     ]);

//     const linkedInId = profileRes.data.id;
//     const firstName = profileRes.data.localizedFirstName;
//     const lastName = profileRes.data.localizedLastName;
//     const email = emailRes.data.elements[0]['handle~'].emailAddress;

//     // Example logic: You can create or fetch user from DB here
//     // const existingUser = await User.findOne({ email });
//     // if (existingUser) {
//     //   // login
//     // } else {
//     //   // create and then login
//     // }

//     return res.status(200).json({
//       success: true,
//       message: 'LinkedIn login successful',
//       user: {
//         email,
//         firstName,
//         lastName,
//         linkedInId,
//       },
//     });
//   } catch (error) {
//     console.error('LinkedIn OAuth Error:', error?.response?.data || error.message);
//     return res.status(500).json({
//       success: false,
//       message: 'LinkedIn authentication failed',
//     });
//   }
// };

// import axios from 'axios';
// import dotenv from 'dotenv';
// import User from '../../models/auth'; // Assuming you have a User model

// dotenv.config();

// export const   handleLinkedInCallback = async (req, res) => {
//   console.log("Hello world")
//   try {
//     const { code, state } = req.query;
//     const storedState = req.session.linkedin_oauth_state;

//     // Verify state to prevent CSRF attacks
//     if (state !== storedState) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid state parameter',
//       });
//     }

//     // Exchange code for access token
//     const tokenResponse = await axios.post(
//       'https://www.linkedin.com/oauth/v2/accessToken',
//       null,
//       {
//         params: {
//           grant_type: 'authorization_code',
//           code,
//           redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
//           client_id: process.env.LINKEDIN_CLIENT_ID,
//           client_secret: process.env.LINKEDIN_CLIENT_SECRET,
//         },
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     const accessToken = tokenResponse.data.access_token;

//     // Fetch user profile and email
//     const [profileRes, emailRes] = await Promise.all([
//       axios.get('https://api.linkedin.com/v2/me', {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }),
//       axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }),
//     ]);

//     const linkedInId = profileRes.data.id;
//     const firstName = profileRes.data.localizedFirstName;
//     const lastName = profileRes.data.localizedLastName;
//     const email = emailRes.data.elements[0]['handle~'].emailAddress;
//     const userType = req.session.userType || 'candidate'; // Default to candidate if not set

//     // Check if user exists
//     let user = await User.findOne({ email });

//     if (!user) {
//       // Create new user
//       user = new User({
//         email,
//         firstName,
//         lastName,
//         linkedInId,
//         userType,
//         isVerified: true, // LinkedIn verified email
//       });
//       await user.save();
//     }

//     // Create session or JWT token
//     req.session.userId = user._id;
//     // Or if using JWT:
//     // const token = generateJWT(user);

//     // Redirect based on user type
//     let redirectUrl = '/';
//     if (userType === 'candidate') {
//       redirectUrl = '/student-form';
//     } else if (userType === 'company') {
//       redirectUrl = '/company-form';
//     } else if (userType === 'college') {
//       redirectUrl = '/college-onboarding';
//     }

//     // For frontend to handle the redirect
//     return res.status(200).json({
//       success: true,
//       redirectUrl,
//       user: {
//         id: user._id,
//         email,
//         firstName,
//         lastName,
//         userType,
//       },
//     });

//   } catch (error) {
//     console.error('LinkedIn OAuth Error:', error?.response?.data || error.message);
//     return res.status(500).json({
//       success: false,
//       message: 'LinkedIn authentication failed',
//     });
//   }
// };

// working 

// import axios from 'axios';
// import User from '../../models/auth.js'
// import { generateToken } from '../../utils/jwt.js';

// export const linkedInAuth = async (req, res) => {
//   try {
//     const { code } = req.query;
//     const userType = req.query.state || 'candidate';

//     // 1. Get access token from LinkedIn
//     const tokenResponse = await axios.post(
//       'https://www.linkedin.com/oauth/v2/accessToken',
//       null,
//       {
//         params: {
//           grant_type: 'authorization_code',
//           code,
//           redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
//           client_id: process.env.LINKEDIN_CLIENT_ID,
//           client_secret: process.env.LINKEDIN_CLIENT_SECRET,
//         },
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     const accessToken = tokenResponse.data.access_token;

//     // 2. Get user profile data using OpenID Connect
//     const userInfoResponse = await axios.get(
//       'https://api.linkedin.com/v2/userinfo',
//       {
//         headers: { 
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//           'X-Restli-Protocol-Version': '2.0.0'
//         }
//       }
//     );

//     const userData = {
//       linkedInId: userInfoResponse.data.sub,
//       firstName: userInfoResponse.data.given_name,
//       lastName: userInfoResponse.data.family_name,
//       email: userInfoResponse.data.email,
//       authProvider: 'linkedin',
//       userType: userType.toLowerCase()
//     };

//     // 3. Create or update user
//     let user = await User.findOneAndUpdate(
//       { email: userData.email },
//       { $set: userData },
//       { upsert: true, new: true }
//     );

//     // 4. Generate JWT token
//     const token = generateToken(user);

//     // 5. Redirect to frontend with token
//     res.redirect(`${process.env.FRONTEND_URL}/linkedin-callback?token=${token}&userType=${userType}`);
    
//   } catch (error) {
//     console.error('LinkedIn auth error:', error.response?.data || error.message);
//     res.redirect(`${process.env.FRONTEND_URL}/signup?error=linkedin_failed`);
//   }
// };

// import axios from 'axios';
// import User from '../../models/auth.js';
// import { generateToken } from '../../utils/jwt.js';

// export const linkedInAuth = async (req, res) => {
//   try {
//     const { code, state } = req.query;
    
//     // Validate input
//     if (!code) {
//       return res.redirect(`${process.env.FRONTEND_URL}/signup?error=invalid_code`);
//     }

//     // 1. Get access token from LinkedIn
//     const tokenResponse = await axios.post(
//       'https://www.linkedin.com/oauth/v2/accessToken',
//       null,
//       {
//         params: {
//           grant_type: 'authorization_code',
//           code,
//           redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
//           client_id: process.env.LINKEDIN_CLIENT_ID,
//           client_secret: process.env.LINKEDIN_CLIENT_SECRET,
//         },
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     const accessToken = tokenResponse.data.access_token;

//     // 2. Get user profile data using OpenID Connect
//     const userInfoResponse = await axios.get(
//       'https://api.linkedin.com/v2/userinfo',
//       {
//         headers: { 
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//           'X-Restli-Protocol-Version': '2.0.0'
//         }
//       }
//     );

//     const userData = {
//       linkedInId: userInfoResponse.data.sub,
//       firstName: userInfoResponse.data.given_name,
//       lastName: userInfoResponse.data.family_name,
//       email: userInfoResponse.data.email,
//       authProvider: 'linkedin',
//       userType: (state || 'candidate').toLowerCase()
//     };

//     // 3. Create or update user
//     let user = await User.findOneAndUpdate(
//       { email: userData.email },
//       { $set: userData },
//       { upsert: true, new: true, setDefaultsOnInsert: true }
//     );

//     // 4. Generate JWT token
//     const token = generateToken(user);

//     // 5. Redirect to frontend based on context
//     const redirectPath = state === 'login' 
//       ? '/linkedin-login-callback' 
//       : '/linkedin-signup-callback';
    
//     res.redirect(`${process.env.FRONTEND_URL}${redirectPath}?token=${token}&userType=${userData.userType}`);
    
//   } catch (error) {
//     console.error('LinkedIn auth error:', error.response?.data || error.message);
//     const redirectPath = state === 'login' 
//       ? '/login?error=linkedin_failed' 
//       : '/signup?error=linkedin_failed';
//     res.redirect(`${process.env.FRONTEND_URL}${redirectPath}`);
//   }
// };
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