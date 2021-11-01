const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

    console.log(req.headers);

    // Check that the token exists
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Unauthorized access" });
    } else {

        // Validation of the token
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "There was a problem decrypting the token.", err });
            } else {
                req.user = decoded;
                next();
            }

        })
    }

};