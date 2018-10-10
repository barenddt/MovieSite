const express = require("express");
const jwt = require("jsonwebtoken");
const { secret } = require("../config");
const User = require("../Models/userModel");

function Auth(authRoutes = express.Router()) {
  //Route for registration.
  authRoutes.route("/register").post((req, res) => {
    if (!req.body.username || !req.body.password) {
      res.json({ success: false, msg: "Please pass username and password." });
    } else {
      var newUser = new User({
        username: req.body.username,
        password: req.body.password
      });
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({ success: false, msg: "Username already exists." });
        }
        res.json({ success: true, msg: "Successful created new user." });
      });
    }
  });

  //Route for login.
  authRoutes.route("/login").post((req, res) => {
    User.findOne(
      {
        username: req.body.username
      },
      function(err, user) {
        if (err) throw err;

        if (!user) {
          res.status(401).send({
            success: false,
            msg: "Authentication failed. User not found."
          });
        } else {
          // check if password matches
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              // if user is found and password is right create a token
              var token = jwt.sign(user.toJSON(), secret);
              // return the information including token as JSON
              res.json({ success: true, token: "JWT " + token });
            } else {
              res.status(401).send({
                success: false,
                msg: "Authentication failed. Wrong password."
              });
            }
          });
        }
      }
    );
  });

  return authRoutes;
}

module.exports = Auth();
