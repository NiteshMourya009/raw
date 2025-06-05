// import mongoose from 'mongoose';

// const AuthSchema = new mongoose.Schema({
//   firstName: { type: String },
//   lastName: { type: String },
//   linkedInId: { 
//     type: String, 
//     unique: true,
//     sparse: true // Allows null values but enforces uniqueness for non-null
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+\@.+\..+/, 'Please enter a valid email']
//   },
//   password: { type: String },
//   profileImage: { type: String },
//   userType: {
//     type: String,
//     enum: ['candidate', 'college', 'company', 'employer', 'student', 'fresher', 'professional'],
//     default: 'candidate'
//   },
//   authProvider: {
//     type: String,
//     enum: ['manual', 'google', 'linkedin'],
//     default: 'manual'
//   }
// }, { 
//   timestamps: true,
//   versionKey: false
// });

// // Index for faster lookups
// AuthSchema.index({ email: 1, linkedInId: 1 }, { unique: true });

// export default mongoose.models.Auth || mongoose.model('Auth', AuthSchema);

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  linkedInId: { 
    type: String, 
    unique: true,
    sparse: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
     index: true
  },
  password: { type: String },
  userType: {
    type: String,
    enum: ['candidate', 'college', 'company', 'employer','student', 'fresher' , 'professional'],
    required: true
  },
  authProvider: {
    type: String,
    enum: ['manual', 'google', 'linkedin'],
    default: 'manual'
  }
}, { 
  timestamps: true,
  versionKey: false 
});

export default mongoose.models.User || mongoose.model('User', UserSchema);