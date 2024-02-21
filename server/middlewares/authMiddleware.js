const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        //get token from local storage, if it exists
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new Error('No token found');
        }
        const token = authHeader.split(' ')[1];
        const decryptedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decryptedToken);
        req.body.userId = decryptedToken._id;
        next();
    } catch (err) {
        return res.json({
            success: false,
            message: err.message,
        });
    }
};
