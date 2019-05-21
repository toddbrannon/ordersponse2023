var mongoose        = require("mongoose");

// SCHEMA SETUP
var representativeSchema  = new mongoose.Schema({
    Name: String
 });

var representative = mongoose.model("Representative", representativeSchema);
module.exports = representative;