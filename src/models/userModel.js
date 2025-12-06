const User = {
  id: String,
  name: String,
  email: String,
  password: String,
  role: String,
  isBlocked: Boolean,
  isEmailVerified: Boolean,
  profilePicture: String,
  createdAt: Date,
  updatedAt: Date
};

module.exports = User;