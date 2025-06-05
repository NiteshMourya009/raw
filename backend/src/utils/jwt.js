import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id, 
      email: user.email,
      userType: user.userType
    },
    process.env.JWT_SECRET,
    { expiresIn: '10d' }
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return null;
  }
};