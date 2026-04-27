// Get all posts
exports.getAllPosts = (req, res) => {
    res.status(200).send("All posts");
};

// Get a single post by ID
exports.getPostById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(`Post ID: ${id}`);
};

// Create a new post
exports.createPost = (req, res) => {
    const { title, content } = req.body;
    res.status(201).json({ title, content });
};

// Update a post
exports.updatePost = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Post updated",
        id: id,
        data: req.body
    });
};

// Delete a post
exports.deletePost = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Post deleted",
        id: id
    });
};
