const { model } = require("mongoose");
const db = require("../models");

module.exports = function(app) {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/index.html"));
    });
    
    app.get("/excersise", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/excersise.html"));
    });
    
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/stats.html"))
    })


}