const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

require("./routes/htmlRoutes")(app);



app.listen(PORT, () => {
    console.log("App is listening on Port: " + PORT);
});
