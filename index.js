const express = require("express");

app = express();

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.use(express.static("public"));

app.listen(8000);