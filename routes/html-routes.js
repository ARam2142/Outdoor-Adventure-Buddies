// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("index");
  });

  app.get("/bucketlist", isAuthenticated, (req, res) => {
    res.render("bucketList");
  });

  app.get("/adirondackPeaks", isAuthenticated, (req, res) => {
    res.render("adirondackPeaks");
  });

  app.get("/northernMainePeaks", isAuthenticated, (req, res) => {
    res.render("northernMainePeaks");
  });

  app.get("/presidentialPeaks", isAuthenticated, (req, res) => {
    res.render("presidentialPeaks");
  });

  app.get("/regions", isAuthenticated, (req, res) => {
    res.render("regions");
  });

};
