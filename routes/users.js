var express = require("express");
var router = express.Router();
var User = require("../models/user.js");

// Load Keys ===================================================================
//const keys = require('./config/keys');


// INDEX ROUTE - show all users
router.get("/", isLoggedIn, function(req, res) {
    // Get all users from DB
    User.find({}, function(err, allUsers) {
        if (err) {
            console.log(err);
            req.flash("error", "Something went wrong. Please contact your system administrator!");
        } else {
            res.render("users", { users: allUsers });
            //Test to see if this returns the number of records in the collection
            console.log(allUsers.length);
        }
    });
});

// CREATE (REGISTER) ROUTE - add new user to the DB
router.post("/register", isLoggedIn, function(req, res) {
    // get data from form and add to users array
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let user = req.body.user;
    let password = req.body.password;
    let isAdmin = req.body.isAdmin;
    let newUser = { firstname: firstname, lastname: lastname, user: user, password: password, isAdmin:isAdmin };
    // Create a new customer and save to DB
    User.create(newUser, function(err, newlyCreated) {
        if (err) {
            console.log(err);
            req.flash("error", "Unable to add the user. Please try again or contact your system administrator for help.");
        } else {
            //redirect back to customers page
            req.flash("success", "New user has been added!");
            res.redirect("/");
        }
    });
});




// SHOW ROUTE - shows more info about one user
router.get("/:id", isLoggedIn, function(req, res) {
    //find the user with provided ID
    User.findById(req.params.id, function(err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            //render show template with that user
            res.render("show", { user: foundUser });
        }
    });
});

// EDIT ROUTE - edit an user
router.get("/:id/edit", isLoggedIn, (req, res) => {
    // the user with the provided ID
    //render edit template with that user
    User.findById(req.params.id, (err, foundUser) => {
        if (err) {
            res.redirect("/users");
        } else {
            res.render("edit", { user: foundUser });
        }
    });
});

// UPDATE ROUTE - update user
router.put("/:id", isLoggedIn, (req, res) => {
    // find and update the correct user
    User.findByIdAndUpdate(req.params.id, req.body.user, (err, updatedUser) => {
        if (err) {
            req.flash("error", "Unable to process your request at this time. Try again or contact your system administrator for help.");
            res.redirect("/users");
            console.log(err);
        } else {
            req.flash("success", "Your changes have been saved.");
            res.redirect("/users/" + req.params.id);
        }
    });
    // redirect to the 'show' page (to see changes)
});

// DESTROY ROUTE - delete a user
router.delete("/:id", isLoggedIn, (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, updatedUser) => {
        if (err) {
            req.flash("error", "Unable to process your request at this time. Try again or contact your system administrator for help.");
            res.redirect("/users");
            console.log(err);
        } else {
            req.flash("success", "User has been deleted.");
            res.redirect("/users");
        }
    });
})

// Middleware ==================================================================
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    /*req.flash("error", "Please login first!");*/
    res.redirect("/login");
    console.log("Redirecting to login from isLoggedIn middleware.");
}

module.exports = router;