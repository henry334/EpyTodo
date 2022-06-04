var midd = require("../../middleware/auth");
var user = require("../user/user.query.js");
var all = require("./todos.query");

module.exports = function(app) {
    app.get("/todos", midd, (req, res) => {
        all.all_todo(res);
    });

    app.get("/todos/:id", midd, (req, res) => {
        var id = req.params.id;
        if (id == null)
            return res.status(404).json({"msg" : "Bad parameter"});
        else
            all.show_atodo(id, res);
    });

    app.post("/todos", midd, (req, res) => {
        var title = req.body["title"];
        var des = req.body["description"];
        var due_time = req.body["due_time"];
        var user_id = req.body["user_id"];
        var stat = req.body["status"];
        if (title == null || des == null || due_time == null || user_id == null || stat == null)
            return res.status(404).json({"msg" : "Bad parameter"});
        else
            all.creat_todo(title, des, due_time, user_id, stat, res);
    });

    app.delete("/todos/:id", midd, (req, res) => {
        var id = req.params.id;
        all.delete_todo(res, id);
    });

    app.put("/todos/:id", midd, (req, res) => {
        var title = req.body["title"];
        var des = req.body["description"];
        var due_time = req.body["due_time"];
        var user_id = req.body["user_id"];
        var stat = req.body["status"];
        var id = req.params.id
        if (title == null || des == null || due_time == null || user_id == null || stat == null || id == null)
            return res.status(404).json({"msg" : "Bad parameter"});
        else
            all.update_atodo(title, des, due_time, user_id, stat, id, res);
    });
};