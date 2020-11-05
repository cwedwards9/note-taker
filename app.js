const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const path = require("path");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

// Serve static files (css and index.js file which handles front-end manipulation)
app.use(express.static(path.join(__dirname, 'public')));

// Router() middleware for /api routes
app.use("/api", apiRoutes);


require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
    console.log("App is listening on Port: " + PORT);
});
