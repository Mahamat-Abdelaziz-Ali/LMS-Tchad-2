const jwt = require("jsonwebtoken");

const verifyToken = (token, secretkey) =>{
    return jwt.verify(token, secretkey)
}

const authenticate = (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({
            success : false,
            mressage : "User is not authentificated"
        })
    }

    const token = authHeader.split("") [1];

    const payload = verifyToken(token, "JWT_SECRET")

    req.user = payload;

    next();
};

module.exports = 
