const express = require('express');
const app = express();
require('./dbConnection');

// //DATABASE CONNECTION
// const mongoose = require('mongoose');
// require('dotenv').config();
// mongoose.connect(process.env.MONGO_URI);

// const connection = mongoose.connection;
// connection.on('connected', () => {
//     console.log('MongoDB connection successful.');
// });
// connection.on('error', () => {
//     console.log('DB connection failed');
// });

//SERVER
const port = process.env.PORT || 5000; //we are using 3000 for frontend

app.listen(port, () => {
    console.log('Node Server is running on Port: ', port);
});
