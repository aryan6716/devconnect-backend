const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Route for getting all posts
router.get('/', postController.getAllPosts);

// Route for getting a post by ID
router.get('/:id', postController.getPostById);

// Route for creating a post
router.post('/', postController.createPost);

// Route for updating a post
router.patch('/:id', postController.updatePost);

// Route for deleting a post
router.delete('/:id', postController.deletePost);

module.exports = router;
