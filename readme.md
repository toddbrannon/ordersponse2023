#WPI Orders App Prototype

Thurs 12/14/2017 ToDo List:

*Paging for the Orders Table
*Dealing with null values in the collection (renders "N/A" to the orders page)
*Dollar formatting for cost, commision, and amount
*Edit page
*New order page
*Better order ID solution (the collection id is too long and cumbersome)

--------------------------------------------------------------
#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

1. Install body-parser
npm install body-parser --save

2. Add app.use for body-parser in app.js before app.set
app.use(bodyParser.urlencoded({extended: true}));

RESTFUL ROUTES (there a 7 total routes)

REST - A mapping between HTTP routes and CRUD (Create, Read, Update, Destroy)

name        url                 verb        desc.
======================================================================
INDEX       /customers          GET         Display a list of all dogs/customers/campgrounds
NEW         /customers/new      GET         Displays form to make a new customer
CREATE      /customers          POST        Add new dog to DB
SHOW        /customers/:id      GET         Shows info about one customer
EDIT        /customers/:id/edit GET         Show edit form for one customer
UPDATE      /customers/:id      PUT         Update a particular customer, then redirect somewhere
DESTROY     /customers/:id      DELETE      Delete a particluar customer, then redirect somewhere


** You have to have two routes in order to send a post request: NEW (show form) and CREATE (submit form).

01/03/2018 -- Redesigned Login UI (login.ejs)
            - Made new copy of the /v2.1_live_demo/TruSponseWPI directory and changed name to
              /v2.1_live_demo/TruSponseWPI.1_Pagination for working on the code to paginate
              the orders view