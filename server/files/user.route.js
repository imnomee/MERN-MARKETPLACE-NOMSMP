const router = require('express').Router();
const User = require('./user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { auth } = require('./middlewares');

//New User Registeration
router.post('/register', async (req, res) => {
    console.log('register working');
    try {
        //check if user exists by email
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            throw new Error('User already exists. Please login.');
        }
        //hash password if no user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        //if no user create user
        const newUser = new User(req.body);
        await newUser.save();

        return res.json({
            success: true,
            message: 'New User Created Successfully.',
        });
    } catch (err) {
        return res.json({
            success: false,
            message: err.message,
        });
    }
});

//Login User
router.post('/login', async (req, res) => {
    try {
        //check if user exists by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error('User not found. Please register.');
        }
        //compare passwords
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            throw new Error('Invalid password. Please try again.');
        }

        //generate token and send it with response
        const token = jwt.sign(
            { userId: user._id, isAdmin: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        //login user
        return res.json({
            success: true,
            message: 'User signed in Successfully.',
            token,
            user,
        });
    } catch (err) {
        return res.json({
            success: false,
            message: err.message,
        });
    }
});

router.get('/get-current-user', auth, async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);
        return res.json({
            success: true,
            message: 'User Fetched successfully',
            data: user,
        });
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
});

module.exports = router;
