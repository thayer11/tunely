var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.exports.Album = require("./album.js");