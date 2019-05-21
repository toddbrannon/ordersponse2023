var mongoose        = require("mongoose");

// SCHEMA SETUP
var orderSchema  = new mongoose.Schema({
    date: String,
    /*commission: String,*/
    /*loc: Number,*/
    territory: String,
    principal: String,
    customer: String,
    representative: String,
    /*cost: Number,*/
    /*commission: Number,*/
    amount: Number
 });

var Order = mongoose.model("Order", orderSchema);
module.exports = Order;