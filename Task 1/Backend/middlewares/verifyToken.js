const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // const token = req.header('token');
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) return res.status(401).json({ error: 'Access Denied'});

    try {
        const verify = jwt.verify(token, process.env.TOKEN_SECRET);
        // userId
        req.user= verify;
        next();
    } catch (e) {
        res.status(400).json({ error: 'Invalid token'});
    }
}

module.exports = verifyToken;