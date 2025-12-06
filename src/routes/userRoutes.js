const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User CRUD Operations
router.post('/create-user', userController.createUser);
router.get('/read-user', userController.readUser);
router.put('/update-user', userController.updateUser);
router.delete('/delete-user', userController.deleteUser);

// User Retrieval
router.get('/all-users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);

// Authentication
router.post('/login', userController.loginUser);
router.post('/logout', userController.logoutUser);

// Profile Management
router.put('/change-password', userController.changePassword);
router.put('/update-profile', userController.updateProfile);
router.post('/upload-profile-picture', userController.uploadProfilePicture);
router.delete('/delete-account', userController.deleteAccount);

// Admin Operations
router.put('/make-admin/:id', userController.makeAdmin);
router.put('/remove-admin/:id', userController.removeAdmin);

// User Search & Filter
router.get('/search', userController.searchUsers);
router.get('/filter', userController.filterUsers);

// User Status Management
router.patch('/block-user/:id', userController.blockUser);
router.patch('/unblock-user/:id', userController.unblockUser);

// Email Verification
router.post('/verify-email', userController.verifyEmail);
router.post('/resend-verification', userController.resendVerification);

module.exports = router;