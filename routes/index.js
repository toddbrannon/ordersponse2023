var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// Root route===================================================================
router.get("/", function(req, res){
    res.render("landing");
    console.log("The root route has been requested and rendered.");
});

// Dashboard route =============================================================
router.get("/dashboard", isLoggedIn, function(req, res){
    res.render("dashboard");
});

//==============================================================================
// AUTH ROUTES
//==============================================================================
// Show signup/register form ===================================================
router.get("/register", function(req, res){
    res.render("register");
});

// Handling user sign up =======================================================
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    req.body.password;
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            req.flash("error", err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/");
        });
    });
});

//==============================================================================

//====================== LOGIN + LOGOUT ROUTES =================================

// Render login form ===========================================================
router.get("/login", function(req, res){
    res.render("login");
    console.log("Login route loaded (index route file).");
});

// Login logic =================================================================
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        successFlash: 'You are now logged in!',
        failureRedirect: "/login",
        failureFlash: 'Invalid username or password.'
    }), function(req, res){
});

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
    /*req.flash("error", "Please login first!");*/
    res.redirect("/login");
    console.log("Redirecting to login from isLoggedIn middleware.");
}

module.exports = router;















