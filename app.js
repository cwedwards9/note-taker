const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

// Serve static css and js files
app.use(express.static(__dirname + '/public'));

// Router() middleware for /api routes
app.use("/api", apiRoutes);

require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
    console.log("App is listening on Port: " + PORT);
});
