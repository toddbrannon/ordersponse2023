var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// Root route===================================================================
router.get("/", (req, res) => {
    res.render("landing");
    console.log("The root route has been requested and rendered (from index.js).");
});

// Dashboard route =============================================================
// router.get("/dashboard", isLoggedIn, (req, res) => {
//     res.render("dashboard");
// });

// // Charts route (prototyping as of 9-22-2019)=============================================================
// router.get("/charts", isLoggedIn, (req, res) => {
//     res.render("charts");
// });

// // Admin route (prototyping as of 9-23-2019)=============================================================
// router.get("/admin", isLoggedIn, (req, res) => {
//     res.render("admin");
// });

// Register new user form (only for logged in user - needs to be admin only priviledges)
// router.get("/register", isLoggedIn, function(req, res){
//     res.render("register");
// })

//==============================================================================
// AUTH ROUTES
//==============================================================================
// Show signup/register form ===================================================
router.get("/register", (req, res) => {
    res.render("register");
    console.log("Register view rendered (from index.js).")
});
// Handling user sign up =======================================================
// router.post("/register", function(req, res){
//     let newUser = new User({username: req.body.username});
//     let newUserPW = req.body.password;
//     let isAdmin = req.body.isAdmin;
//     User.register(newUser, newUserPW, isAdmin, function(err, user){
//         if(err){
//             console.log("There was an error: " + err);
//             req.flash("error", err);
//             return res.render("register");
//         }
//         passport.authenticate("local")(req, res, function(){
//             res.redirect("/");
//             console.log("Passport authentication successful")
//         });
//     });
// });

//==============================================================================

//====================== Register ROUTES =================================

// Render login form ===========================================================
router.post("/register", (req, res) => {
    const newUser = new User({username: req.body.username});
    req.body.password;
    console.log(newUser + ";" + req.body.password);
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
        /*successFlash: 'You are now logged in!',*/
        failureRedirect: "/login",
        failureFlash: 'Invalid username or password.'
    }), function(req, res){
});

//==============================================================================

// Logout route ================================================================
router.get("/logout", function(req, res){
    req.logout();
    /*req.flash("success", "You have successfully logged out!");*/
    res.redirect("login");
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















