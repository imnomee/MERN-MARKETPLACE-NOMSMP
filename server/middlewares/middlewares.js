const jwt = require('jsonwebtoken');

//we will get the password in request.body
exports.auth = (req, res, next) => {
    try {
        //get the token from header
        const token = req.header('authorization').split(' ')[1];
        const decryptedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decryptedToken.userId;
        next();
    } catch (err) {
        return res.json({ success: false, message: err.message });
    }
};
