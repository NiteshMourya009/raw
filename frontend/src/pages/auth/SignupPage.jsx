// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { useState , useEffect } from 'react';
// // import axios from 'axios' ;
// // function SignupPage() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const userType = location.state?.userType || 'User';

// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //     confirmPassword: ''
// //   });

// //     useEffect(() => {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     const code = urlParams.get('code');
// //     const state = urlParams.get('state');

// //     if (code && state) {
// //       handleLinkedInCallback(code, state);
// //     }
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const userType = localStorage.getItem('userType');

// //     if (userType === 'candidate') {
// //       navigate('/student-form');
// //     } else if (userType === 'company') {
// //       navigate('/company-form');
// //     } else if (userType === 'college') {
// //       navigate('/college-onboarding');
// //     }

// //     console.log('Form submitted:', formData);
// //   };
// //   const handleLinkedInLogin = () => {
// //     const clientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
// //     const redirectUri = encodeURIComponent(`${window.location.origin}/auth/linkedin/callback`);
// //     const state = Math.random().toString(36).substring(2);
// //     const scope = encodeURIComponent('r_liteprofile r_emailaddress');

// //     // Store state and user type in session storage
// //     sessionStorage.setItem('linkedin_oauth_state', state);
// //     localStorage.setItem('selectedRole', userType);

// //     const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
    
// //     window.location.href = linkedInAuthUrl;
// //   };

// //   const handleLinkedInCallback = async (code, state) => {
// //     try {
// //       const response = await axios.get(`/auth/linkedin/callback`, {
// //         params: { code, state }
// //       });

// //       if (response.data.success) {
// //         // Store user data if needed
// //         localStorage.setItem('user', JSON.stringify(response.data.user));
        
// //         // Redirect to appropriate page
// //         navigate(response.data.redirectUrl);
// //       } else {
// //         console.error('LinkedIn authentication failed');
// //         navigate('/signup', { state: { error: 'LinkedIn authentication failed' } });
// //       }
// //     } catch (error) {
// //       console.error('Error handling LinkedIn callback:', error);
// //       navigate('/signup', { state: { error: 'Error during authentication' } });
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex">
// //       {/* Left Side - Form */}
// //       <div className="w-full md:w-1/2 flex flex-col p-8">
// //         {/* Logo */}
// //         <div className="mb-10">
// //           <h1 className="text-xl font-italic font-bold">Logo</h1>
// //         </div>

// //         {/* Sign Up Form */}
// //         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
// //           <h1 className="text-3xl font-bold mb-2">Sign Up - {userType}</h1>
// //           <p className="text-gray-600 mb-8">Sign up to get started as a {userType}.</p>

// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
// //                 placeholder="Email"
// //                 required
// //               />
// //             </div>

// //             <div>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
// //                 placeholder="Password"
// //                 required
// //               />
// //             </div>

// //             <div>
// //               <input
// //                 type="password"
// //                 name="confirmPassword"
// //                 value={formData.confirmPassword}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
// //                 placeholder="Confirm Password"
// //                 required
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
// //             >
// //               Sign up
// //             </button>
// //           </form>

// //           <div className="my-6 relative flex items-center">
// //             <div className="flex-grow border-t border-gray-300"></div>
// //             <div className="flex-grow border-t border-gray-300"></div>
// //           </div>

// //           <button className="w-full border border-gray-300 py-3 flex items-center justify-center mb-3 hover:bg-gray-50">
// //             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
// //             </svg>
// //             Sign up with Google
// //           </button>

// //           <button 
// //             onClick={handleLinkedInLogin}
// //             className="w-full border border-gray-300 py-3 flex items-center justify-center hover:bg-gray-50"
// //           >
// //             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
// //             </svg>
// //             Sign up with LinkedIn
// //           </button>

// //           <p className="text-center mt-6">
// //             Already have an account? <a href="/login" className="text-black hover:underline">Log In</a>
// //           </p>
// //         </div>

// //         {/* Footer */}
// //         <div className="mt-auto">
// //           <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
// //         </div>
// //       </div>

// //       {/* Right Side - Image Placeholder */}
// //       <div className="hidden md:block md:w-1/2 bg-gray-200 flex items-center justify-center">
// //         <div className="w-48 h-48 bg-gray-300 flex items-center justify-center">
// //           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //           </svg>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SignupPage;


// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function SignupPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userType = location.state?.userType || 'User';

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState('');

//     useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code');

//   //   if (code) {
//   //     handleLinkedInCallback(code);
//   //   }
//   // }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     // Basic validation
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       // Send registration data to backend
//       const response = await axios.post('/api/auth/register', {
//         email: formData.email,
//         password: formData.password,
//         userType: userType.toLowerCase() // 'candidate', 'company', or 'college'
//       });

//       // Store token and user data
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       localStorage.setItem('userType', userType.toLowerCase());

//       // Redirect based on user type
//       if (userType.toLowerCase() === 'candidate') {
//         navigate('/student-form');
//       } else if (userType.toLowerCase() === 'company') {
//         navigate('/company-form');
//       } else if (userType.toLowerCase() === 'college') {
//         navigate('/college-onboarding');
//       }
//     } catch (err) {
//       console.error('Registration error:', err);
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//     }
//   };

//   const handleLinkedInLogin = () => {
//     const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
//     const redirectUri = encodeURIComponent(`http://localhost:5000/api/auth/linkedin/callback`);
//     const state = Math.random().toString(36).substring(2);
//     const scope = encodeURIComponent('r_liteprofile r_emailaddress');

//     // Store state and user type in session storage
//     sessionStorage.setItem('linkedin_oauth_state', state);
//     localStorage.setItem('selectedRole', userType);

//     const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
    
//     window.location.href = linkedInAuthUrl;
//   };

//   const handleLinkedInCallback = async (code, state) => {
//     try {
//       // Verify state first
//       const savedState = sessionStorage.getItem('linkedin_oauth_state');
//       if (state !== savedState) {
//         throw new Error('Invalid state');
//       }

//       // Get the user type from localStorage
//       const userType = localStorage.getItem('selectedRole') || 'user';

//    const response = await axios.post(`${import.meta.env.REACT_APP_BACKEND_URL}/api/auth/register`, {
//         code,
//         state,
//         userType: userType.toLowerCase()
//       });

//       if (response.data.success) {
//         // Store user data
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));
//         localStorage.setItem('userType', userType.toLowerCase());

//         // Redirect to appropriate page
//         if (userType.toLowerCase() === 'candidate') {
//           navigate('/student-form');
//         } else if (userType.toLowerCase() === 'company') {
//           navigate('/company-form');
//         } else if (userType.toLowerCase() === 'college') {
//           navigate('/college-onboarding');
//         }
//       } else {
//         throw new Error('LinkedIn authentication failed');
//       }
//     } catch (error) {
//       console.error('Error handling LinkedIn callback:', error);
//       setError(error.response?.data?.message || 'LinkedIn authentication failed. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Side - Form */}
//       <div className="w-full md:w-1/2 flex flex-col p-8">
//         {/* Logo */}
//         <div className="mb-10">
//           <h1 className="text-xl font-italic font-bold">Logo</h1>
//         </div>

//         {/* Sign Up Form */}
//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">Sign Up - {userType}</h1>
//           <p className="text-gray-600 mb-8">Sign up to get started as a {userType}.</p>

//           {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Confirm Password"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
//             >
//               Sign up
//             </button>
//           </form>

//           <div className="my-6 relative flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <button className="w-full border border-gray-300 py-3 flex items-center justify-center mb-3 hover:bg-gray-50">
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
//             </svg>
//             Sign up with Google
//           </button>

//           <button 
//             onClick={handleLinkedInLogin}
//             className="w-full border border-gray-300 py-3 flex items-center justify-center hover:bg-gray-50"
//           >
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
//             </svg>
//             Sign up with LinkedIn
//           </button>

//           <p className="text-center mt-6">
//             Already have an account? <a href="/login" className="text-black hover:underline">Log In</a>
//           </p>
//         </div>

//         {/* Footer */}
//         <div className="mt-auto">
//           <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
//         </div>
//       </div>

//       {/* Right Side - Image Placeholder */}
//       <div className="hidden md:block md:w-1/2 bg-gray-200 flex items-center justify-center">
//         <div className="w-48 h-48 bg-gray-300 flex items-center justify-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;









// // import { useNavigate } from 'react-router-dom';
// // import { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function SignupPage() {
// //   const navigate = useNavigate();
// //   const [userType, setUserType] = useState(localStorage.getItem('selectedRole') || 'candidate');
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //     confirmPassword: ''
// //   });
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     const code = urlParams.get('code');
// //     const state = urlParams.get('state');

// //     if (code && state) {
// //       handleLinkedInCallback(code, state);
// //     }
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`, {
// //         ...formData,
// //         userType
// //       }, {
// //         withCredentials: true
// //       });

// //       if (response.data.success) {
// //         localStorage.setItem('user', JSON.stringify(response.data.user));
// //         redirectUser(userType);
// //       }
// //     } catch (error) {
// //       setError(error.response?.data?.message || 'Signup failed');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const redirectUser = (type) => {
// //     switch (type) {
// //       case 'candidate':
// //         navigate('/student-form');
// //         break;
// //       case 'company':
// //         navigate('/company-form');
// //         break;
// //       case 'college':
// //         navigate('/college-onboarding');
// //         break;
// //       default:
// //         navigate('/');
// //     }
// //   };

// //   const handleLinkedInLogin = () => {
// //     const clientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
// //     const redirectUri = encodeURIComponent(`${window.location.origin}/auth/linkedin/callback`);
// //     const state = Math.random().toString(36).substring(2);
// //     const scope = encodeURIComponent('r_liteprofile r_emailaddress');

// //     sessionStorage.setItem('linkedin_oauth_state', state);
// //     localStorage.setItem('selectedRole', userType);

// //     window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
// //   };

// //   const handleLinkedInCallback = async (code, state) => {
// //     try {
// //       setLoading(true);
// //       const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/linkedin/callback`, {
// //         params: { code, state },
// //         withCredentials: true
// //       });

// //       if (response.data.success) {
// //         localStorage.setItem('user', JSON.stringify(response.data.user));
// //         redirectUser(response.data.user.userType);
// //       } else {
// //         setError('LinkedIn authentication failed');
// //       }
// //     } catch (error) {
// //       setError(error.response?.data?.message || 'Error during authentication');
// //       console.error('LinkedIn auth error:', error);
// //     } finally {
// //       setLoading(false);
// //       // Clean up URL
// //       window.history.replaceState({}, document.title, window.location.pathname);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex">
// //       {/* Left Side - Form */}
// //       <div className="w-full md:w-1/2 flex flex-col p-8">
// //         {/* Logo */}
// //         <div className="mb-10">
// //           <h1 className="text-xl font-italic font-bold">Logo</h1>
// //         </div>

// //         {/* Sign Up Form */}
// //         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
// //           <h1 className="text-3xl font-bold mb-2">Sign Up - {userType}</h1>
// //           <p className="text-gray-600 mb-8">Sign up to get started as a {userType}.</p>

// //           {error && (
// //             <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
// //               {error}
// //             </div>
// //           )}

// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
// //                 placeholder="Email"
// //                 required
// //               />
// //             </div>

// //             <div>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
// //                 placeholder="Password"
// //                 required
// //               />
// //             </div>

// //             <div>
// //               <input
// //                 type="password"
// //                 name="confirmPassword"
// //                 value={formData.confirmPassword}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
// //                 placeholder="Confirm Password"
// //                 required
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors disabled:opacity-50"
// //             >
// //               {loading ? 'Processing...' : 'Sign up'}
// //             </button>
// //           </form>

// //           <div className="my-6 flex items-center">
// //             <div className="flex-grow border-t border-gray-300"></div>
// //             <span className="mx-4 text-gray-500">OR</span>
// //             <div className="flex-grow border-t border-gray-300"></div>
// //           </div>

// //           <button 
// //             onClick={handleLinkedInLogin}
// //             disabled={loading}
// //             className="w-full border border-gray-300 py-3 rounded flex items-center justify-center mb-3 hover:bg-gray-50 disabled:opacity-50"
// //           >
// //             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //               <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
// //             </svg>
// //             Sign up with LinkedIn
// //           </button>

// //           <p className="text-center mt-6">
// //             Already have an account? <a href="/login" className="text-black hover:underline">Log In</a>
// //           </p>
// //         </div>

// //         {/* Footer */}
// //         <div className="mt-auto">
// //           <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
// //         </div>
// //       </div>

// //       {/* Right Side - Image Placeholder */}
// //       <div className="hidden md:block md:w-1/2 bg-gray-200 flex items-center justify-center">
// //         <div className="w-full h-full bg-gray-300 flex items-center justify-center">
// //           <img 
// //             src="/images/signup-side-image.jpg" 
// //             alt="Signup illustration" 
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SignupPage;


// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function SignupPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userType = location.state?.userType || 'User';

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');
//     const linkedinUserType = urlParams.get('userType');
    
//     if (token) {
//       handleLinkedInSuccess(token, linkedinUserType);
//     }
//   }, []);

//   const handleLinkedInSuccess = (token, userType) => {
//     try {
//       localStorage.setItem('token', token);
//       localStorage.setItem('userType', userType.toLowerCase());
      
//       if (userType.toLowerCase() === 'candidate') {
//         navigate('/student-form');
//       } else if (userType.toLowerCase() === 'company') {
//         navigate('/company-form');
//       } else if (userType.toLowerCase() === 'college') {
//         navigate('/college-onboarding');
//       }
//        else if (userType.toLowerCase() === 'employer') {
//         navigate('/onboardingflowForm');
//       }
//     } catch (error) {
//       console.error('LinkedIn success handling error:', error);
//       setError('Failed to process LinkedIn login');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/auth/register', {
//         email: formData.email,
//         password: formData.password,
//         userType: userType.toLowerCase()
//       });

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       localStorage.setItem('userType', userType.toLowerCase());

//       if (userType.toLowerCase() === 'candidate') {
//         navigate('/student-form');
//       } else if (userType.toLowerCase() === 'company') {
//         navigate('/company-form');
//       } else if (userType.toLowerCase() === 'college') {
//         navigate('/college-onboarding');
//       }
//        else if (userType.toLowerCase() === 'employer') {
//         navigate('/onboardingflowForm');
//       }
//     } catch (err) {
//       console.error('Registration error:', err);
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//     }
//   };

//   const handleLinkedInLogin = () => {
//     const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
    
//     if (!clientId) {
//       setError("LinkedIn authentication is not configured properly");
//       return;
//     }

//     const redirectUri = encodeURIComponent(
//       import.meta.env.VITE_LINKEDIN_REDIRECT_URI || 
//       'http://localhost:5000/api/auth/linkedin/callback'
//     );

//     const state = userType.toLowerCase();
    
//     // Use new OpenID Connect scopes
//     const scope = encodeURIComponent('openid profile email');
    
//     const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
    
//     window.location.href = linkedInAuthUrl;
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Side - Form */}
//       <div className="w-full md:w-1/2 flex flex-col p-8">
//         {/* Logo */}
//         <div className="mb-10">
//           <h1 className="text-xl font-italic font-bold">Logo</h1>
//         </div>

//         {/* Sign Up Form */}
//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">Sign Up - {userType}</h1>
//           <p className="text-gray-600 mb-8">Sign up to get started as a {userType}.</p>

//           {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Confirm Password"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
//             >
//               Sign up
//             </button>
//           </form>

//           <div className="my-6 relative flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <button className="w-full border border-gray-300 py-3 flex items-center justify-center mb-3 hover:bg-gray-50">
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
//             </svg>
//             Sign up with Google
//           </button>

//           <button 
//             onClick={handleLinkedInLogin}
//             className="w-full border border-gray-300 py-3 flex items-center justify-center hover:bg-gray-50"
//           >
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
//             </svg>
//             Sign up with LinkedIn
//           </button>

//           <p className="text-center mt-6">
//             Already have an account? <a href="/login" className="text-black hover:underline">Log In</a>
//           </p>
//         </div>

//         {/* Footer */}
//         <div className="mt-auto">
//           <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
//         </div>
//       </div>

//       {/* Right Side - Image Placeholder */}
//       <div className="hidden md:block md:w-1/2 bg-gray-200 flex items-center justify-center">
//         <div className="w-48 h-48 bg-gray-300 flex items-center justify-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;



// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function SignupPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedRole = localStorage.getItem('userType') || 'User';

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');
//     const linkedinUserType = urlParams.get('userType');
    
//     if (token) {
//       handleLinkedInSuccess(token, linkedinUserType);
//     }
//   }, []);

//   const handleLinkedInSuccess = (token, userType) => {
//     try {
//       localStorage.setItem('token', token);
      
//       // Use role from LinkedIn if available, otherwise from localStorage
//       const role = userType?.toLowerCase() || localStorage.getItem('userType') || 'user';
//       localStorage.setItem('userType', role);
//       console.log(role) ;
//       if (role === 'candidate') {
//         navigate('/student-form');
//       } else if (role === 'company') {
//         navigate('/company-form');
//       } else if (role === 'college') {
//         navigate('/college-onboarding');
//       }
//       else if (role === 'employer') {
//         navigate('/onboardingflowForm');
//       }
//     } catch (error) {
//       console.error('LinkedIn success handling error:', error);
//       setError('Failed to process LinkedIn login');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Get the role from localStorage
//     const userType = localStorage.getItem('userType');

//     if (userType === 'candidate') {
//       navigate('/student-form');
//     } else if (userType === 'company') {
//       navigate('/company-form');
//     } else if (userType === 'college') {
//       navigate('/college-onboarding');
//     }
//     else if (userType === 'employer') {
//       navigate('/Onboarding-flow-Form');
//     }

//     console.log('Form submitted:', formData);
//   };

//   const handleLinkedInLogin = () => {
//     const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
    
//     if (!clientId) {
//       setError("LinkedIn authentication is not configured properly");
//       return;
//     }

//     const redirectUri = encodeURIComponent(
//       import.meta.env.VITE_LINKEDIN_REDIRECT_URI || 
//       'http://localhost:5000/api/auth/linkedin/callback'
//     );

//     const state = localStorage.getItem('userType') || 'user';
//     const scope = encodeURIComponent('openid profile email');
    
//     const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
    
//     window.location.href = linkedInAuthUrl;
//   };

//   return (
//     <div className="min-h-screen flex">
//       <div className="w-full md:w-1/2 flex flex-col p-8">
//         <div className="mb-10">
//           <h1 className="text-xl font-italic font-bold">Logo</h1>
//         </div>

//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">Sign Up - {selectedRole}</h1>
//           <p className="text-gray-600 mb-8">Sign up to get started as a {selectedRole}.</p>

//           {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Confirm Password"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
//             >
//               Sign up
//             </button>
//           </form>

//           <div className="my-6 relative flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <button className="w-full border border-gray-300 py-3 flex items-center justify-center mb-3 hover:bg-gray-50">
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
//             </svg>
//             Sign up with Google
//           </button>

//           <button 
//             onClick={handleLinkedInLogin}
//             className="w-full border border-gray-300 py-3 flex items-center justify-center hover:bg-gray-50"
//           >
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
//             </svg>
//             Sign up with LinkedIn
//           </button>

//           <p className="text-center mt-6">
//             Already have an account? <a href="/login" className="text-black hover:underline">Log In</a>
//           </p>
//         </div>

//         <div className="mt-auto">
//           <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
//         </div>
//       </div>

//       <div className="hidden md:block md:w-1/2 bg-gray-200 flex items-center justify-center">
//         <div className="w-48 h-48 bg-gray-300 flex items-center justify-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;

// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function SignupPage() {
//   const navigate = useNavigate();
//   const selectedRole = localStorage.getItem('selectedRole') || localStorage.getItem('userType') || 'candidate';

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');
//     const userType = urlParams.get('userType');
    
//     if (token && userType) {
//       localStorage.setItem('token', token);
//       localStorage.setItem('userType', userType);
//       navigateBasedOnRole(userType, true);
//     }
//   }, []);

//   const navigateBasedOnRole = (role, replace = false) => {
//     switch(role) {
//       case 'candidate':
//         navigate('/student-form', { replace });
//         break;
//       case 'company':
//         navigate('/company-form', { replace });
//         break;
//       case 'college':
//         navigate('/college-onboarding', { replace });
//         break;
//       case 'employer':
//         navigate('/onboardingflowForm', { replace });
//         break;
//       default:
//         navigate('/student-form', { replace });
//     }
//   };

//   const handleLinkedInLogin = () => {
//     const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
    
//     if (!clientId) {
//       setError("LinkedIn authentication is not configured properly");
//       return;
//     }

//     const redirectUri = encodeURIComponent(
//       import.meta.env.VITE_LINKEDIN_REDIRECT_URI || 
//       'http://localhost:5000/api/auth/linkedin/callback'
//     );

//     const state = localStorage.getItem('selectedRole') || 'candidate';
//     const scope = encodeURIComponent('openid profile email');
    
//     const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
    
//     window.location.href = linkedInAuthUrl;
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigateBasedOnRole(selectedRole);
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Panel - Form */}
//       <div className="w-full md:w-1/2 flex flex-col p-8">
//         <div className="mb-10">
//           <h1 className="text-xl font-italic font-bold">Logo</h1>
//         </div>

//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">
//             Sign Up - {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Sign up to get started as a {selectedRole} on TalentConnects.
//           </p>

//           {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Confirm Password"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
//             >
//               Sign up
//             </button>
//           </form>

//           <div className="my-6 relative flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="px-4 text-gray-500 text-sm">Or continue with</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <div className="space-y-4">
//             <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
//               </svg>
//               Sign up with Google
//             </button>

//             <button 
//               onClick={handleLinkedInLogin}
//               className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
//               </svg>
//               Sign up with LinkedIn
//             </button>
//           </div>

//           <p className="text-center mt-6 text-gray-600">
//             Already have an account?{' '}
//             <a href="/login" className="text-black font-medium hover:underline">
//               Log In
//             </a>
//           </p>
//         </div>

//         <div className="mt-auto">
//           <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
//         </div>
//       </div>

//       {/* Right Panel - Image Placeholder */}
//       <div className="hidden md:block md:w-1/2 bg-gray-200 flex items-center justify-center">
//         <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default SignupPage;

// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function SignupPage() {
//   const navigate = useNavigate();
//   const selectedRole = localStorage.getItem('selectedRole') || localStorage.getItem('userType') || 'candidate';

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');
//     const userType = urlParams.get('selectedRole');
    
//     if (token && userType) {
//       localStorage.setItem('token', token);
//       localStorage.setItem('userType', userType);
//       navigateBasedOnRole(userType, true);
//     }
//   }, []);

//   const navigateBasedOnRole = (role, replace = false) => {
//     switch(role) {
//       case 'candidate':
//         navigate('/student-form', { replace });
//         break;
//       case 'company':
//         navigate('/company-form', { replace });
//         break;
//       case 'college':
//         navigate('/college-onboarding', { replace });
//         break;
//       case 'employer':
//         navigate('/onboardingflowForm', { replace });
//         break;
//       default:
//         navigate('/student-form', { replace });
//     }
//   };

//   const handleLinkedInLogin = () => {
//     const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
    
//     if (!clientId) {
//       setError("LinkedIn authentication is not configured properly");
//       return;
//     }

//     const redirectUri = encodeURIComponent(
//       import.meta.env.VITE_LINKEDIN_REDIRECT_URI || 
//       'http://localhost:5000/api/auth/linkedin/callback'
//     );

//     const state = localStorage.getItem('selectedRole') || 'candidate';
//     const scope = encodeURIComponent('openid profile email');
    
//     const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
    
//     window.location.href = linkedInAuthUrl;
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords don't match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         '/api/auth/signup', 
//         {
//           ...formData,
//           userType: selectedRole
//         }
//       );

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('userType', selectedRole);
//       navigateBasedOnRole(selectedRole);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Panel - Form */}
//       <div className="w-full md:w-1/2 flex flex-col p-8">
//         <div className="mb-10">
//           <h1 className="text-xl font-italic font-bold">Logo</h1>
//         </div>

//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">
//             Sign Up - {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Sign up to get started as a {selectedRole} on TalentConnects.
//           </p>

//           {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
//                 placeholder="Confirm Password"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
//             >
//               Sign up
//             </button>
//           </form>

//           <div className="my-6 relative flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="px-4 text-gray-500 text-sm">Or continue with</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <div className="space-y-4">
//             <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
//               </svg>
//               Sign up with Google
//             </button>

//             <button 
//               onClick={handleLinkedInLogin}
//               className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
//               </svg>
//               Sign up with LinkedIn
//             </button>
//           </div>

//           <p className="text-center mt-6 text-gray-600">
//             Already have an account?{' '}
//             <a href="/login" className="text-black font-medium hover:underline">
//               Log In
//             </a>
//           </p>
//         </div>

//         <div className="mt-auto flex ">
//           <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
//         </div>
//       </div>

//       {/* Right Panel - Image Placeholder */}
//       <div className="hidden md:block md:w-1/2 bg-gray-200 flex items-center justify-center">
//         <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;




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