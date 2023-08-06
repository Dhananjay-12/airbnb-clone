const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: {
    type: String,
    default: "Nothing",
  },
  maxGuests: Number,
  price: Number,
});

const PlaceModel = mongoose.model("Place", placeSchema);

module.exports = PlaceModel;