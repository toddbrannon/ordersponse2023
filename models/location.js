var mongoose        = require("mongoose");

// SCHEMA SETUP
var locationSchema  = new mongoose.Schema({
    Name: String
 });

var Location = mongoose.model("Location", locationSchema);
module.exports = Location;