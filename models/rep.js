var mongoose = require("mongoose");

// SCHEMA SETUP
var repSchema  = new mongoose.Schema({
    rep_name: String
 });

var rep = mongoose.model("Rep", repSchema);
module.exports = rep;