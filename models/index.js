var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.exports.Album = require("./album.js");
module.exports.Song = require("./songs.js");