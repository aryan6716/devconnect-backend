const app = require('./app');
const connectDB = require('./config/db');

const PORT = 3000;

// Connect to Database first, then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
