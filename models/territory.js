var mongoose        = require("mongoose");

// SCHEMA SETUP
var territorySchema  = new mongoose.Schema({
    Name: String
 });

var Territory = mongoose.model("Territory", territorySchema);
module.exports = Territory;