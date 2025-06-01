import express from 'express';
import { createEmployerProfile } from '../controllers/employerDashboard/employerProfileController.js'
import multer from 'multer';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  '/create',
  upload.fields([
    { name: 'verificationDocuments', maxCount: 5 }
  ]),
  createEmployerProfile
);

export default router;
