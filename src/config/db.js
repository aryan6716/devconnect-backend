const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'devconnect';

async function connectDB() {
  try {
    // Attempt to connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to MongoDB');
    
    // Select the database
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Stop the server if connection fails
  }
}

module.exports = connectDB;
