var express = require("express");
var router = express.Router();
var Order = require("../models/order.js");
const Rep = require("../models/rep");

// Load Keys ===================================================================
// const keys = require('./config/keys');


// INDEX ROUTE - show all orders
router.get("/", isLoggedIn, function(req, res) {
    // Get all orders from DB
    Order.find({}, function(err, allOrders) {
        if (err) {
            console.log(err);
            req.flash("error", "Something went wrong. Please contact your system administrator!");
        } else {
            res.render("orders", { orders: allOrders });
            //Test to see if this returns the number of records in the collection
            console.log(allOrders.length);
            console.log("All orders rendered.")
        }
    });
});

// get values for rep select (dropdown) in new and edit views
router.get("/getdata", (req, res) => {
    Rep.find({}, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send("error retrieving data from the database")
        } else {
            console.log(data)
            res.status(200).send(data)
        }
    })
})


// CREATE ROUTE - add new order to the DB
router.post("/new", isLoggedIn, function(req, res) {
    // get data from form and add to orders array
    var date = req.body.date;
    var commission = req.body.commission;
    var loc = req.body.loc;
    var customer = req.body.customer;
    var principal = req.body.principal;
    var territory = req.body.territory;
    var representative = req.body.representative;
    var cost = req.body.cost;
    var amount = req.body.amount;
    var newOrder = { date: date, commission: commission, loc: loc, customer: customer, principal: principal, territory: territory, representative: representative, cost: cost, amount: amount };
    // Create a new customer and save to DB
    Order.create(newOrder, function(err, newlyCreated) {
        if (err) {
            console.log(err);
            req.flash("error", "Unable to add your order. Please try again or contact your system administrator for help.");
        } else {
            //redirect back to customers page
            req.flash("success", "Your order has been added!");
            res.redirect("/");
        }
    });
});

// NEW ROUTE - show form to create new customer
router.get("/new", isLoggedIn, function(req, res) {
    res.render("new");
});


// SHOW ROUTE - shows more info about one order
router.get("/:id", isLoggedIn, function(req, res) {
    //find the order with provided ID
    Order.findById(req.params.id, function(err, foundOrder) {
        if (err) {
            console.log(err);
        } else {
            //render show template with that order
            res.render("show", { order: foundOrder });
        }
    });
});

// EDIT ROUTE - edit an order
router.get("/:id/edit", isLoggedIn, (req, res) => {
    // the order with the provided ID
    //render edit template with that order
    Order.findById(req.params.id, (err, foundOrder) => {
        if (err) {
            res.redirect("/orders");
        } else {
            res.render("edit", { order: foundOrder });
        }
    });
});

// UPDATE ROUTE - update an order
router.put("/:id", isLoggedIn, (req, res) => {
    // find and update the correct order
    Order.findByIdAndUpdate(req.params.id, req.body.order, (err, updatedOrder) => {
        if (err) {
            req.flash("error", "Unable to process your request at this time. Try again or contact your system administrator for help.");
            res.redirect("/orders");
            console.log(err);
        } else {
            req.flash("success", "Your changes have been saved.");
            res.redirect("/orders/" + req.params.id);
        }
    });
    // redirect to the 'show' page (to see changes)
});

// DESTROY ROUTE - delete an order
router.delete("/:id", isLoggedIn, (req, res) => {
    Order.findByIdAndRemove(req.params.id, (err, updatedOrder) => {
        if (err) {
            req.flash("error", "Unable to process your request at this time. Try again or contact your system administrator for help.");
            res.redirect("/orders");
            console.log(err);
        } else {
            req.flash("success", "Order has been deleted.");
            res.redirect("/orders");
        }
    });
})


// EMAIL ROUTE - shows the email form to compose a new email
router.get("/:id/email", isLoggedIn, function(req, res) {
    res.render("email");
});

// COMPOSE ROUTE - compose email in the email form
router.post("/email", isLoggedIn, function(req, res) {
    var transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: keys.email,
            pass: keys.password
        }
    });
    // get data from the email form
    var mailOptions = {
        from: '"Todd Brannon" <toddqbrannon@gmail.com>', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: '<b>NodeJS Email Tutorial</b>' // html body
    };
    // send the email
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            return console.log(err);
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.render("/orders");
        }
    });
});

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