const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  registeredTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", signupSchema);
