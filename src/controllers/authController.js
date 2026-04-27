const jwt = require('jsonwebtoken');

// Constant secret key
const JWT_SECRET = "USER_APP";

// Simple signin function
exports.signin = (req, res) => {
    const { username, password } = req.body;
    
    // Sign a token with the username
    const token = jwt.sign({ username: username }, JWT_SECRET);
    
    res.json({
        message: "Logged in successfully",
        token: token
    });
};
