const jwt = require('jsonwebtoken');

const authMid = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const payload = jwt.verify(token, process.env.JWT_KEY);
            if (payload.email){
                return next();
            } else {
                return res.status(400).send("Invalid token");
            }
        } catch (error) {
            return res.status(500).send(error.message);            
        }        
    } else {
        return res.status(401).send("Não autorizado");
    }
};

module.exports = { authMid };