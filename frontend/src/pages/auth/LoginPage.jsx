// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function LoginPage() {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleLinkedInLogin = () => {
//   // LinkedIn OAuth 2.0 implementation
//   const clientId = '77h8xw3kje71lm'; // Replace with your actual LinkedIn Client ID
//   const redirectUri = encodeURIComponent('http://localhost:5173/auth/linkedin/callback');
//   const state = Math.random().toString(36).substring(2); // Random state for security
//   const scope = encodeURIComponent('r_liteprofile r_emailaddress');

//   const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
  
//   // Store state to verify later
//   sessionStorage.setItem('linkedin_oauth_state', state);
  
//   window.location.href = linkedInAuthUrl;
// };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
// // change after when backend will getting integrate 
// // this user type take from the db

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const userType = localStorage.getItem('userType');

//     if (userType === 'student') {
//       navigate('/home');
//     } else if (userType === 'company') {
//       navigate('/fresherhome');
//     } else if (userType === 'college') {
//       navigate('/home');
//     }else if(userType=='fresher'){
//       navigate('/home') ;
//     }
//     else if(userType == 'professional'){
//       navigate('/profhome');
//     }

//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Side - Form */}
//       <div className="w-full md:w-1/2 flex flex-col p-8">
//         {/* Logo */}
//         <div className="mb-10">
//           <h1 className="text-xl font-italic font-bold">Logo</h1>
//         </div>

//         {/* Login Form */}
//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">Log In</h1>
//           <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet adipiscing elit.</p>

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

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
//             >
//               Log in
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
//             Log in with Google
//           </button>

//           <button
//             onClick={handleLinkedInLogin}
//            className="w-full border border-gray-300 py-3 flex items-center justify-center hover:bg-gray-50">
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
//             </svg>
//             Log in with LinkedIn
//           </button>

//           <div className="text-center mt-6">
//             <p className="mb-2">
//               <a href="/forgot-password" className="text-black hover:underline">Forgot your password?</a>
//             </p>
//             <p>
//               Don't have an account? <Link to="/signup" className="text-black hover:underline">Sign Up</Link>
//             </p>
//           </div>
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

// export default LoginPage;


// import { useState , useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function LoginPage() {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');
//     const userType = urlParams.get('userType');
    
//     if (token && userType) {
//       // Store token and user type
//       localStorage.setItem('token', token);
//       localStorage.setItem('userType', userType);
      
//       // Navigate based on role
//       navigateBasedOnUserType(userType);
//     }
//   }, []);

//   const navigateBasedOnUserType = (userType) => {
//     switch(userType.toLowerCase()) {
//       case 'candidate':
//       case 'student':
//       case 'fresher':
//         navigate('/home');
//         break;
//       case 'company':
//         navigate('/fresherhome');
//         break;
//       case 'college':
//         navigate('/home');
//         break;
//       case 'employer':
//       case 'professional':
//         navigate('/profhome');
//         break;
//       default:
//         navigate('/home');
//     }
//   };

//   const handleLinkedInLogin = () => {
//     const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
//     const redirectUri = encodeURIComponent(
//       import.meta.env.VITE_LINKEDIN_REDIRECT_URI || 
//       'http://localhost:5000/api/auth/linkedin/callback'
//     );
//     const state = 'login'; // Differentiate from signup
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
//     const userType = localStorage.getItem('userType');
//     navigateBasedOnUserType(userType);
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Side - Form */}
//       <div className="w-full md:w-1/2 flex flex-col p-8">
//         {/* Logo */}
//         <div className="mb-10">
//           <h1 className="text-xl font-italic font-bold">Logo</h1>
//         </div>

//         {/* Login Form */}
//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">Log In</h1>
//           <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet adipiscing elit.</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Form fields remain unchanged */}
//           </form>

//           <div className="my-6 relative flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <button className="w-full border border-gray-300 py-3 flex items-center justify-center mb-3 hover:bg-gray-50">
//             {/* Google SVG remains */}
//           </button>

//           <button
//             onClick={handleLinkedInLogin}
//             className="w-full border border-gray-300 py-3 flex items-center justify-center hover:bg-gray-50"
//           >
//             {/* LinkedIn SVG remains */}
//           </button>

//           <div className="text-center mt-6">
//             <p className="mb-2">
//               <a href="/forgot-password" className="text-black hover:underline">Forgot your password?</a>
//             </p>
//             <p>
//               Don't have an account? <Link to="/signup" className="text-black hover:underline">Sign Up</Link>
//             </p>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-auto">
//           <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
//         </div>
//       </div>

//       {/* Right Side - Image Placeholder */}
//       <div className="hidden md:block md:w-1/2 bg-gray-200 flex items-center justify-center">
//         {/* Image placeholder remains */}
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


// import { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function LoginPage() {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get('token');
//     const userType = urlParams.get('userType');
    
//     if (token && userType) {
//       // Store token and user type
//       localStorage.setItem('token', token);
//       localStorage.setItem('userType', userType);
      
//       // Navigate based on role
//       navigateBasedOnUserType(userType);
//     }
//   }, []);

//   const navigateBasedOnUserType = (userType) => {
//     switch(userType.toLowerCase()) {
//       case 'candidate':
//       case 'student':
//       case 'fresher':
//         navigate('/home');
//         break;
//       case 'company':
//         navigate('/fresherhome');
//         break;
//       case 'college':
//         navigate('/home');
//         break;
//       case 'employer':
//       case 'professional':
//         navigate('/profhome');
//         break;
//       default:
//         navigate('/home');
//     }
//   };

//   const handleLinkedInLogin = () => {
//     const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
//     const redirectUri = encodeURIComponent(
//       import.meta.env.VITE_LINKEDIN_REDIRECT_URI || 
//       'http://localhost:5000/api/auth/linkedin/callback'
//     );
//     const state = 'login'; // Differentiate from signup
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
//     const userType = localStorage.getItem('userType');
//     navigateBasedOnUserType(userType);
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Side - Form */}
//       <div className="w-full md:w-1/2 flex flex-col p-8">
//         {/* Logo */}
//         <div className="mb-10">
//           <h1 className="text-xl font-italic font-bold">Logo</h1>
//         </div>

//         {/* Login Form */}
//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">Log In</h1>
//           <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet adipiscing elit.</p>

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

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
//             >
//               Log in
//             </button>
//           </form>

//           <div className="my-6 relative flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="mx-4 text-gray-500">or</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <button className="w-full border border-gray-300 py-3 flex items-center justify-center mb-3 hover:bg-gray-50">
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
//             </svg>
//             Log in with Google
//           </button>

//           <button
//             onClick={handleLinkedInLogin}
//             className="w-full border border-gray-300 py-3 flex items-center justify-center hover:bg-gray-50"
//           >
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
//             </svg>
//             Log in with LinkedIn
//           </button>

//           <div className="text-center mt-6">
//             <p className="mb-2">
//               <a href="/forgot-password" className="text-black hover:underline">Forgot your password?</a>
//             </p>
//             <p>
//               Don't have an account? <Link to="/signup" className="text-black hover:underline">Sign Up</Link>
//             </p>
//           </div>
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

// export default LoginPage;

// import { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// function LoginPage() {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//    useEffect(() => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const token = urlParams.get('token');
//   const userType = urlParams.get('userType') || urlParams.get('selectedRole');
  
//   if (token && userType) {
//     localStorage.setItem('token', token);
//     localStorage.setItem('userType', userType);
//     navigateBasedOnUserType(userType);
    
//     // Clear URL params
//     window.history.replaceState({}, document.title, window.location.pathname);
//   }
// }, []);

//   const navigateBasedOnUserType = (userType) => {
//     switch(userType.toLowerCase()) {
//       case 'student':
//         navigate('/home');
//         break;
//       case 'fresher':
//         navigate('/fresherhome');
//         break;
//       case 'college':
//         navigate('/home');
//         break;
//       case 'employer':
//       case 'professional':
//         navigate('/profhome');
//         break;
//       default:
//         navigate('/home');
//     }
//   };

// const handleLinkedInLogin = () => {
//   const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
//   const redirectUri = encodeURIComponent(
//     import.meta.env.VITE_LINKEDIN_REDIRECT_URI || 
//     'http://localhost:5000/api/auth/linkedin/callback'
//   );
//   const state = 'login'; // Differentiate login flow
//   const scope = encodeURIComponent('openid profile email');

//   window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
// };
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', 
//         {
//           email: formData.email,
//           password: formData.password
//         }
//       );

//       const userType = response.data.userType;
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('selectedRole', userType);
//       navigateBasedOnUserType(userType);
//     } catch (err) {
//       console.error('Login error:', err.response?.data?.message || 'Login failed');
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

//         {/* Login Form */}
//         <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
//           <h1 className="text-3xl font-bold mb-2">Log In</h1>
//           <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet adipiscing elit.</p>

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

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
//             >
//               Log in
//             </button>
//           </form>

//           <div className="my-6 relative flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="px-4 text-gray-500 text-sm">or</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center mb-3 hover:bg-gray-50 transition-colors">
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
//             </svg>
//             Log in with Google
//           </button>

//           <button
//             onClick={handleLinkedInLogin}
//             className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//           >
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
//             </svg>
//             Log in with LinkedIn
//           </button>

//           <div className="text-center mt-6">
//             <p className="mb-2">
//               <a href="/forgot-password" className="text-black hover:underline">Forgot your password?</a>
//             </p>
//             <p>
//               Don't have an account? <Link to="/signup" className="text-black hover:underline">Sign Up</Link>
//             </p>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-auto">
//           <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
//         </div>
//       </div>

//       {/* Right Side - Image Placeholder */}
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

// export default LoginPage;
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const errorType = urlParams.get('error');
    
    const errorMessages = {
      account_not_found: 'Account does not exist. Please sign up first.',
      auth_failed: 'LinkedIn authentication failed. Please try again.',
      invalid_token: 'Failed to get access token from LinkedIn.',
      incomplete_profile: 'Your LinkedIn profile is missing required information.',
      invalid_client_credentials: 'System misconfiguration. Please contact support.',
      timeout: 'Connection to LinkedIn timed out. Please try again.',
      dns_error: 'Network error. Please check your internet connection.',
    };
    
    if (errorType) {
      setError(errorMessages[errorType] || 'Authentication failed');
      // Clear URL params
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

 
  const handleLinkedInLogin = () => {
    const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
    
    if (!clientId) {
      setError("LinkedIn authentication is not configured properly");
      return;
    }

    const redirectUri = encodeURIComponent(
      import.meta.env.VITE_LINKEDIN_REDIRECT_URI || 
      'http://localhost:5000/api/auth/linkedin/callback'
    );
    
    const state = 'login';
    const scope = encodeURIComponent('openid profile email');
    
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;
  };

  const handleGoogleLogin = () => {
    setError('Google login is currently unavailable');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        '/api/auth/login', 
        {
          email: formData.email,
          password: formData.password
        }
      );

      const userType = response.data.userType;
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userType', userType);
   //   navigateBasedOnUserType(userType);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col p-8">
        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-xl font-italic font-bold">Logo</h1>
        </div>

        {/* Login Form */}
        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Log In</h1>
          <p className="text-gray-600 mb-8">Access your TalentConnects account</p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

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

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Log in
            </button>
          </form>

          <div className="my-6 relative flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* LinkedIn button outside form */}
          <div>
            <button 
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center mb-3 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
              </svg>
              Log in with Google
            </button>

            <button
              type="button"
              onClick={handleLinkedInLogin}
              className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              Log in with LinkedIn
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="mb-2">
              <a href="/forgot-password" className="text-black hover:underline">Forgot your password?</a>
            </p>
            <p>
              Don't have an account? <Link to="/signup" className="text-black hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <p className="text-sm text-gray-500">© 2025 TalentConnects</p>
        </div>
      </div>

      {/* Right Side - Image Placeholder */}
      <div className="hidden md:block md:w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="w-48 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;