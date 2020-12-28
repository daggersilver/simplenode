var express = require("express");
var path = require("path");
var app = express();


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"))
});
app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "about.html"))
});
app.get("/contact-me", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "contact-me.html"))
});
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "404.html"))
});

app.listen(8080)