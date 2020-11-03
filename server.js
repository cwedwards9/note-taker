const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
    res.send("TEST");
})

app.listen(PORT, () => {
    console.log("App is listening on Port: " + PORT);
});
