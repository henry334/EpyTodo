var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    var authhead = req.headers['authorization'];
    var token = authhead && authhead.split(' ')[1];
    if (token == null) return res.status(403).json({"msg": "No token, authorization is denied"});
    jwt.verify(token, process.env.SECRET, (err, user_info) => {
        if (err) return res.status(401).json({"msg": "Token is not valid"});
        req.user_info = user_info;
        next();
    })
}