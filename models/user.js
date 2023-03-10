const mongoose                = require("mongoose")
const passportLocalMongoose   = require("passport-local-mongoose");

//SCHEMA SETUP
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    // password: {
    //     type: String,
    //     required: true
    // },
    // isAdmin: {type: Boolean, default: false}
}, {timestamps: true});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);