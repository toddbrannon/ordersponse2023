var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


// Root route===================================================================
router.get("/", function(req, res){
    res.render("landing");
});

//==============================================================================
// AUTH ROUTES
//==============================================================================
// Show signup/register form ===================================================
router.get("/register", (req, res) => {
    res.render("register");
    console.log("Register view rendered (from index.js).")
});

//====================== Register ROUTES =================================

// Handling user sign up ===========================================================
router.post("/register", (req, res) => {
    console.log("newUser: " + req.body.username)
    const newUser = new User({username: req.body.username});
    
    req.body.password;
    console.log("newUser: " + newUser + ";" + "password: " + req.body.password);
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log("There was an error: " + err);
            req.flash("error", err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/");
            console.log("Passport authentication successful")
        });
    });
});

//==============================================================================

//====================== login + LOGOUT ROUTES =================================

// Render login form ===========================================================
router.get("/login", function(req, res){
    res.render("login");
});

// login logic =================================================================
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        successFlash: 'You are now logged in!',
        failureRedirect: "/login",
        failureFlash: 'Invalid username or password.'
    }));

//==============================================================================

// Logout route ================================================================
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "You have successfully logged out!");
    res.redirect("/");
});

// Middleware ==================================================================
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login3");
}

module.exports = router;