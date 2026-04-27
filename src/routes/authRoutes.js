const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for signin
router.post('/signin', authController.signin);

module.exports = router;
