// Get all users
exports.getAllUsers = (req, res) => {
    res.send("All users");
};

// Get a single user by ID
exports.getUserById = (req, res) => {
    const id = req.params.id;
    res.send(`User ID: ${id}`);
};

// Create a new user
exports.createUser = (req, res) => {
    const { name, email } = req.body;
    res.json({ name, email });
};
