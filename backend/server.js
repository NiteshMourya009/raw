import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

import authRoutes from './src/routes/auth.js';
import uploadRoutes from './src/routes/uploadRoutes.js';
import studentProfileRoutes from './src/routes/studentProfileRoutes.js';
import fresherProfileRoutes from './src/routes/fresherProfileRoutes.js';
import professionalProfileRoutes from './src/routes/professionalProfileRoutes.js'; // ⬅️ New import
import companyProfileRoutes from './src/routes/companyDashboard/companyProfileRoutes.js';
import collegeProfileRoutes from './src/routes/collegeDashboard/collegeProfileRoutes.js';
import collegeOnboardingRoutes from './src/routes/collegeDashboard/collegeOnboardingRoutes.js';
import employerProfileRoutes from './src/routes/employerProfileRoutes.js';

import cors from 'cors';



// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/student-profile', studentProfileRoutes);
app.use('/api/fresher-profile', fresherProfileRoutes);
app.use('/api/professional-profile', professionalProfileRoutes); // ⬅️ New route
app.use('/api/companyDashboard', companyProfileRoutes);
app.use('/api/college', collegeProfileRoutes);
app.use('/api/college-onboarding', collegeOnboardingRoutes);
app.use('/api/employer-profile', employerProfileRoutes);




// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
