const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config({path: "../.env"});
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : false}));
const port = process.env.PORT || 3000;
require("./routes/user/user.js")(app);
require("./routes/todos/todos.js")(app);
require("./routes/auth/auth.js")(app);

app.listen (port, () => {
	console.log (`App listening at http://localhost:${port}`);
});

