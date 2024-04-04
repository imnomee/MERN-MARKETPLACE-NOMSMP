const express = require('express');
const app = express();
require('./dbConnection'); //BRING THE DB CONNECTION
app.use(express.json());

//ROUTES
const userRoutes = require('./files/user.route');
app.use('/api/users', userRoutes);

//SERVER
const port = process.env.PORT || 5000; //we are using 3000 for frontend

app.listen(port, () => {
    console.log('Node Server is running on Port: ', port);
});
