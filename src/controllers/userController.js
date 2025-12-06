const userService = require('../services/userService');

const userController = {
  // Create User
  createUser: async (req, res, next) => {
    try {
      const result = await userService.createUser(req.body);
      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Read User
  readUser: async (req, res, next) => {
    try {
      const result = await userService.readUser(req.body);
      res.status(200).json({
        success: true,
        message: 'User read successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Update User
  updateUser: async (req, res, next) => {
    try {
      const result = await userService.updateUser(req.body);
      res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete User
  deleteUser: async (req, res, next) => {
    try {
      const result = await userService.deleteUser(req.body);
      res.status(200).json({
        success: true,
        message: 'User deleted successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Get All Users
  getAllUsers: async (req, res, next) => {
    try {
      const result = await userService.getAllUsers(req.query);
      res.status(200).json({
        success: true,
        message: 'All users fetched successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Get User by ID
  getUserById: async (req, res, next) => {
    try {
      const result = await userService.getUserById(req.params.id);
      res.status(200).json({
        success: true,
        message: 'User fetched by ID',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // User Login
  loginUser: async (req, res, next) => {
    try {
      const result = await userService.loginUser(req.body);
      res.status(200).json({
        success: true,
        message: 'User login successful',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // User Logout
  logoutUser: async (req, res, next) => {
    try {
      const result = await userService.logoutUser(req.body);
      res.status(200).json({
        success: true,
        message: 'User logout successful',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Change Password
  changePassword: async (req, res, next) => {
    try {
      const result = await userService.changePassword(req.body);
      res.status(200).json({
        success: true,
        message: 'Password changed successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Update Profile
  updateProfile: async (req, res, next) => {
    try {
      const result = await userService.updateProfile(req.body);
      res.status(200).json({
        success: true,
        message: 'User profile updated successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Make Admin
  makeAdmin: async (req, res, next) => {
    try {
      const result = await userService.makeAdmin(req.params.id);
      res.status(200).json({
        success: true,
        message: 'User made admin successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Remove Admin
  removeAdmin: async (req, res, next) => {
    try {
      const result = await userService.removeAdmin(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Admin role removed successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Search Users
  searchUsers: async (req, res, next) => {
    try {
      const result = await userService.searchUsers(req.query);
      res.status(200).json({
        success: true,
        message: 'User search completed successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Filter Users
  filterUsers: async (req, res, next) => {
    try {
      const result = await userService.filterUsers(req.query);
      res.status(200).json({
        success: true,
        message: 'User filter completed successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Block User
  blockUser: async (req, res, next) => {
    try {
      const result = await userService.blockUser(req.params.id);
      res.status(200).json({
        success: true,
        message: 'User blocked successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Unblock User
  unblockUser: async (req, res, next) => {
    try {
      const result = await userService.unblockUser(req.params.id);
      res.status(200).json({
        success: true,
        message: 'User unblocked successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Verify Email
  verifyEmail: async (req, res, next) => {
    try {
      const result = await userService.verifyEmail(req.body);
      res.status(200).json({
        success: true,
        message: 'Email verified successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Resend Verification
  resendVerification: async (req, res, next) => {
    try {
      const result = await userService.resendVerification(req.body);
      res.status(200).json({
        success: true,
        message: 'Verification email resent',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Upload Profile Picture
  uploadProfilePicture: async (req, res, next) => {
    try {
      const result = await userService.uploadProfilePicture(req.body);
      res.status(200).json({
        success: true,
        message: 'Profile picture uploaded successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  },

  // Delete Account
  deleteAccount: async (req, res, next) => {
    try {
      const result = await userService.deleteAccount(req.body);
      res.status(200).json({
        success: true,
        message: 'Account deleted successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = userController;