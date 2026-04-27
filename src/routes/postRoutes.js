const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to get all posts
router.get('/', postController.getAllPosts);

// Route to get a specific post by ID
router.get('/:id', postController.getPostById);

// Route to create a new post (Protected)
router.post('/', authMiddleware, postController.createPost);

// Route to update a post (Protected)
router.patch('/:id', authMiddleware, postController.updatePost);

// Route to delete a post (Protected)
router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;
