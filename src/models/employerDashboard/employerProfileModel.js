import mongoose from 'mongoose';

const employerProfileSchema = new mongoose.Schema({
  companyName: String,
  description: String,
  companyType: String,
  industryType: String,
  numberOfEmployees: String,
  establishedYear: String,
  contactNumber: String,
  alternateNumber: String,
  companyLocation: String,
  state: String,
  city: String,
  country: String,
  pincode: String,
  companyWebsite: String,
  linkedinProfile: String,
  hiringPreferences: {
    jobRoles: [String],
    preferredHiringLocations: [String],
    lookingFor: String, // job, internship, both
    employmentType: String, // full time, part time, contract
  },
  companyVerification: {
    verificationDocuments: [String], // Cloudinary URLs
    tanNumber: String,
    gstNumber: String,
    companyRegNumber: String,
  },
}, {
  timestamps: true
});

const EmployerProfile = mongoose.model('EmployerProfile', employerProfileSchema);
export default EmployerProfile;
