const express = require("express");

function Actions(actionRoutes = express.Router()) {
  actionRoutes.route("/review").post((req, res) => {
    res.json({
      success: true
    });
  });

  return actionRoutes;
}

module.exports = Actions();
