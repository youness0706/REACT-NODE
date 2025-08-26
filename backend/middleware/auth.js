const jwt = require('jsonwebtoken');
const VerifyToken = (req,res,next) => {

    let token = req.headers['authorization'];
    if(!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    token = token.split(' ')[1]; // Remove 'Bearer' prefix
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Forbidden" });
        }
        console.log(decoded);
        req.user = decoded;
        next();
    });
}

module.exports = VerifyToken;
