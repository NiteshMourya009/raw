

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SignupPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(
    localStorage.getItem('selectedRole') || 'candidate'
  );
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const errorType = urlParams.get('error');
    
    const errorMessages = {
      auth_failed: 'LinkedIn authentication failed. Please try again.',
      account_exists: 'Account already exists. Please log in instead.',
      linkedin_used: 'This LinkedIn account is already associated with another profile.',
      invalid_code: 'Invalid authentication code from LinkedIn.',
      invalid_token: 'Failed to get access token from LinkedIn.',
      incomplete_profile: 'Your LinkedIn profile is missing required information.',
      invalid_client_credentials: 'System misconfiguration. Please contact support.',
      timeout: 'Connection to LinkedIn timed out. Please try again.',
      dns_error: 'Network error. Please check your internet connection.',
    };
    
    if (errorType) {
      setError(errorMessages[errorType] || 'Authentication failed');
      // Clear error from URL
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  // const handleRoleSelect = (role) => {
  //   setSelectedRole(role);
  //   localStorage.setItem('selectedRole', role);
  // };

  const handleLinkedInSignup = () => {
    const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
    
    if (!clientId) {
      setError("LinkedIn authentication is not configured properly");
      return;
    }

    // Store role in localStorage
    localStorage.setItem('selectedRole', selectedRole);
    
    const redirectUri = encodeURIComponent(
      import.meta.env.VITE_LINKEDIN_REDIRECT_URI || 
      'http://localhost:5000/api/auth/linkedin/callback'
    );

    // Include role in state parameter
    const state = `signup_${selectedRole}`;
    const scope = encodeURIComponent('openid profile email');
    
    const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
    
    window.location.href = linkedInAuthUrl;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post(
        '/api/auth/signup', 
        {
          ...formData,
          userType: selectedRole
        }
      );

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userType', selectedRole);
   //   navigateBasedOnRole(selectedRole);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="w-full md:w-1/2 flex flex-col p-8">
        <div className="mb-10">
          <h1 className="text-xl font-italic font-bold">Logo</h1>
        </div>

        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">
            Sign Up - {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
          </h1>
          <p className="text-gray-600 mb-8">
            Sign up to get started as a {selectedRole} on TalentConnects.
          </p>

          {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Password"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Confirm Password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Sign up
            </button>
          </form>

          <div className="my-6 relative flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* LinkedIn button outside form */}
          <div className="space-y-4">
            <button 
              type="button"
              className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
              </svg>
              Sign up with Google
            </button>

            <button 
              type="button"
              onClick={handleLinkedInSignup}
              className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              Sign up with LinkedIn
            </button>
          </div>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-black font-medium hover:underline">
              Log In
            </a>
          </p>
        </div>

        <div className="mt-auto flex ">
          <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
        </div>
      </div>

      {/* Right Panel - Image Placeholder */}
      <div className="hidden md:block md:w-1/2 bg-gray-200 items-center justify-center">
        <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;