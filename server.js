// load dependencies
var express = require("express");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

// set up express
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/app/public'));

// start the router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// set up body-parser for form input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// start listening!
app.listen(PORT, function() {
	console.log("app is listening on port " + PORT);
});

