var all = require("./user.query");
var todo = require("../todos/todos.query.js");
var midd = require("../../middleware/auth");

module.exports = function(app) {
    app.get ("/user" , midd, async (req, res) => {
        all.show_tables(res);
    });

    app.get("/user/todos" , midd, (req, res) => {
        todo.todos_user(req.user_info["email"], res);
    });

    app.get("/user/:info", midd, (req, res) => {
        all.show_info(req.params.info, res);
    });

    app.delete("/user/:id", midd, (req, res) => {
        var id = req.params.id;
        all.delete_user(res, id)
    });

    app.put("/user/:id" , midd, (req, res) => {
        var email = req.body["email"];
        var pswd = req.body["password"];
        var name = req.body["name"];
        var name2 = req.body["firstname"];
        var id  = req.params.id;
        if (email == null || pswd == null || name == null || name2 == null || id == null) {
            return res.status(500).json({"msg": "Bad parameter"});
        } else
            all.change_info(email, pswd, name, name2, id, res);
    });
}