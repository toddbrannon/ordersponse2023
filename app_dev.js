var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    flash                   = require("connect-flash"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    methodOverride          = require("method-override");
 //   seedDB                  = require("./seeds");
    

//seedDB();

/*let i = 1;
setTimeout(function run() {
  seedDB(i);
  setTimeout(run, 60000);
}, 60000);*/

// Requiring Routes ============================================================
const ordersRoutes              = require("./routes/orders");
const indexRoutes                 = require("./routes/index");
const usersRoutes               = require("./routes/users");
    
// Load Keys ===================================================================
const keys                  = require('./config/keys');    

// Map global promises
mongoose.Promise            = global.Promise;

// Mongoose Connect ============================================================

mongoose.connect(keys.mongoURI, {
    useMongoClient: true
})

    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//==============================================================================
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(methodOverride("_method"));
app.use(flash());

//==============================================================================
// REQUIRE MODELS
//==============================================================================
const User = require("./models/user");

//==============================================================================
// PASSPORT CONFIGURATION
//==============================================================================
app.use(require("express-session")({
    secret: "The four horsemen of the apocolypse cometh!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/orders", ordersRoutes);
app.use("/users", usersRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`WPI TruSponse server started on port ${port}`));