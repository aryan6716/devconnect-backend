const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to get all users (Protected)
router.get('/', authMiddleware, userController.getAllUsers);

// Route to get a specific user by ID
router.get('/:id', userController.getUserById);

// Route to create a new user
router.post('/', userController.createUser);

module.exports = router;
