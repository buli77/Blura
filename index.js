const express = require("express");
const mongo = require("mongodb");

app = express();

app.get("/", (req, res) => {
    res.sendfile(__dirname + "/public/index.html");
});

app.use(express.static("public"));

const connString = 'mongodb+srv://BluraAdmin:Blura1999@cluster0.px5e1yv.mongodb.net/test';

// mongo.MongoClient.connect("mongodb://localhost:27017", async (err, db) => {
//     db.db("mydb").collection("posts").findOne({}, (err, res) => {
//         console.log(res);
//     })
// });

mongo.MongoClient.connect(connString, (err, db) => {
    db.db('sample_analytics').collection('accounts').findOne({}, (err, res) => {
        console.log(res);
    })
});

app.listen(process.env.PORT || 8000);