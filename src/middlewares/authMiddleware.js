const jwt = require('jsonwebtoken');

const JWT_SECRET = "USER_APP";

const authMiddleware = (req, res, next) => {
    let authHeader = req.headers.authorization;

    console.log("RAW HEADER:", authHeader); // 🔍 debug

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    let token;

    // 🔥 safer extraction
    if (authHeader.startsWith("Bearer ")) {
        token = authHeader.slice(7); // better than split
    } else {
        token = authHeader;
    }

    token = token.trim(); // 🔥 VERY IMPORTANT

    console.log("TOKEN USED:", token); // 🔍 debug

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log("VERIFY ERROR:", error.message); // 🔍 debug
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;