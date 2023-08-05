const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "A user must have a email"],
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
  },
});

const UserModal = mongoose.model("User", UserSchema);

module.exports = UserModal;
