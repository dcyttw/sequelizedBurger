// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    db.burger.findAll({}).then(function(dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      res.render("index", hbsObject);
    });
  });
  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    db.burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
  // PUT route for updating posts
  app.put("/api/burgers/:id", function(req, res) {
    db.burger.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};
