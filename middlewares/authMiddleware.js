const jwt = require('jsonwebtoken')

module.exports = async(req,res,next)=>{
        try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Authorization token missing' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = { id: decoded.id }; 
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Authentication failed' });
    }
};