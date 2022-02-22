const express = require("express");
const router = express.Router();
const signupTemplate = require("../models/userModel");

router.post("/", (req, res) => {
  const signupData = new signupTemplate({
    username: req.body.username,
    password: req.body.password,
  });

  signupData.save((err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      res.status(500).json(err);
    }
  });
});

module.exports = router;
