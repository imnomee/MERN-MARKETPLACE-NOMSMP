//DATABASE CONNECTION
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('MongoDB connection successful.');
});
connection.on('error', () => {
    console.log('DB connection failed');
});

module.exports = connection;
