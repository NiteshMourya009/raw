

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LinkedInSignupCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userType = urlParams.get('userType')?.toLowerCase();

    if (token && userType) {
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);
      
      // Redirect based on role
      switch(userType) {
        case 'candidate': 
          navigate('/student-form', { replace: true }); 
          break;
        case 'company': 
          navigate('/company-form', { replace: true }); 
          break;
        case 'college': 
          navigate('/college-onboarding', { replace: true }); 
          break;
        case 'employer': 
          navigate('/onboardingflowForm', { replace: true }); 
          break;
        default: 
          navigate('/student-form', { replace: true });
      }
    } else {
      navigate('/signup?error=auth_failed');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Completing Signup</h1>
        </div>
        <p className="text-gray-600">Please wait while we set up your account</p>
        <div className="mt-6">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
};

// Login Callback


export const LinkedInLoginCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userType = urlParams.get('userType')?.toLowerCase();

    if (token && userType) {
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);
      
      // Redirect based on role
      switch(userType) {
        case 'candidate': 
        case 'student': 
          navigate('/home', { replace: true }); 
          break;
        case 'fresher': 
          navigate('/fresherhome', { replace极: true }); 
          break;
        case 'college': 
          navigate('/home', { replace: true }); 
          break;
        case 'employer': 
        case 'professional': 
          navigate('/profhome', { replace: true }); 
          break;
        default: 
          navigate('/home', { replace: true });
      }
    } else {
      navigate('/login?error=auth_failed');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Completing Login</h1>
        </div>
        <p className="text-gray-600">Please wait while we authenticate your account</p>
        <div className="mt-6">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
};