const mysql = require("mysql2");

var db = module.exports.db = mysql.createConnection({
	host:	process.env.MYSQL_HOST,
	user:	process.env.MYSQL_USER,
	password:	process.env.MYSQL_ROOT_PASSWORD,
	database:	process.env.MYSQL_DATABASE
});

db.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
});