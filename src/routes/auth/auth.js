var all = require("../user/user.query");
var jwt = require('jsonwebtoken');

module.exports = function(app) {
    app.post('/login', async function(req, res) {
        var email = req.body["email"];
        var pswd = req.body["password"];
        if (pswd == null || email == null)
            return res.status(403).json({"msg": "Bad parameter"});
        await all.chec_credit(res, email, pswd)
    });

    app.post('/register', async function(req, res) {
        var email = req.body["email"];
        var pswd = req.body["password"];
        var name = req.body["name"];
        var name2 = req.body["firstname"];
        if (email == null || pswd == null || name == null || name2 == null)
            return res.status(500).json({"msg": "Bad parameter"});
        await all.account_existe(email, code => {
            if (code != 1)
                return res.status(404).json({"msg": "Account already exists"});
            else {
                all.add_user(email, pswd, name, name2);
                const user_info = {email: email, pswd: pswd};
                const toke = jwt.sign(user_info, process.env.SECRET);
                return res.status(200).json({token: toke});
            }

        });
    });
}