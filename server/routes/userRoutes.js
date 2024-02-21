const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//new User Registeration

router.post('/register', async (req, res) => {
    try {
        //check if user already exists
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            throw new Error('User Already Exist.');
        }
        //user doesn't exist, hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        //save user
        const newUser = new User(req.body);
        await newUser.save();

        return res.json({
            success: true,
            message: 'User created successfully',
        });
    } catch (err) {
        return res.json({
            success: false,
            message: err.message,
        });
    }
});

//user Login
router.post('/login', async (req, res) => {
    try {
        //check if user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error('No user found with that email');
        }
        //compare password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            throw new Error('invalid password');
        }
        //send success with token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        return res.send({
            success: true,
            message: 'user logged in successfully',
            token,
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message,
        });
    }
});

module.exports = router;
