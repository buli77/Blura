const express = require("express");
const mongo = require("mongodb");

app = express();

app.get("/", (req, res) => {
    res.sendfile(__dirname + "/public/index.html");
});

app.use(express.static("public"));

mongo.MongoClient.connect("mongodb://localhost:27017", async (err, db) => {
    db.db("mydb").collection("posts").findOne({}, (err, res) => {
        console.log(res);
    })
});

app.listen(process.env.PORT || 8000);