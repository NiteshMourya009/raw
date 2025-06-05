// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const LinkedInSignupCallback = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');
//     const userType = urlParams.get('userType')?.toLowerCase();

//     // Store token and user type
//     if (token) {
//       localStorage.setItem('token', token);
//     }
    
//     if (userType) {
//       localStorage.setItem('userType', userType); // FIXED: Added second argument
//     }

//     console.log(userType);
    
//     // Redirect based on user role
//     switch(userType) {
//       case 'company':
//         navigate('/company-form');
//         break;
//       case 'professional':
//         navigate('/professional-form');
//         break;
//       case 'candidate':
//         navigate('/candidate-form');
//         break;
//       case 'college':
//         navigate('/college-onboarding');
//         break;
//       case 'employer':
//         navigate('/onboardingflowForm');
//         break;
//     //   default:
//     //     // Handle unknown types or add fallback
//     //     navigate('/complete-profile');
//     }
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-4">Processing LinkedIn Signup...</h1>
//         <p>Please wait while we authenticate your account.</p>
//       </div>
//     </div>
//   );
// };

// export const LinkedInLoginCallback = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleLogin = async () => {
//       try {
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get('token');
        
//         if (!token) {
//           throw new Error('Authentication token missing');
//         }

//         // Store the token
//         localStorage.setItem('token', token);
        
//         // Fetch user role from backend using the token
//         const response = await fetch('/api/user/role', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch user role');
//         }

//         const data = await response.json();
//         const userType = data.userType.toLowerCase();

//         // Store user type
//         localStorage.setItem('userType', userType);

//         // Navigate based on role
//         switch(userType) {
//           case 'candidate':
//           case 'student':
//           case 'fresher':
//             navigate('/home');
//             break;
//           case 'company':
//             navigate('/fresherhome');
//             break;
//           case 'college':
//             navigate('/home');
//             break;
//           case 'employer':
//           case 'professional':
//             navigate('/profhome');
//             break;
//         //   default:
//         //     navigate('/home');
//         }
        
//       } catch (error) {
//         console.error('Login processing error:', error);
//         navigate('/login', { 
//           state: { error: 'Failed to complete LinkedIn login' } 
//         });
//       } finally {
//         // Clear URL parameters
//         window.history.replaceState({}, document.title, window.location.pathname);
//       }
//     };

//     handleLogin();
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-4">Processing LinkedIn Login...</h1>
//         <p>Please wait while we authenticate your account.</p>
//       </div>
//     </div>
//   );
// };



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