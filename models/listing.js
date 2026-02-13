const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    url: String,
    fileName: String,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number], // [lng, lat]
      required: true,
    },
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: String,
    enum: [
      "Trending",
      "Nearby",
      "Rooms",
      "Iconic Cities",
      "Mountains",
      "Villa",
      "Superhost",
      "Camping",
      "Farm House",
      "Amazing Pools",
    ],
  },
});

//post middleware
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing.reviews.length) {
    let result = await Review.deleteMany({ _id: { $in: listing.reviews } });
    console.log(result);
  }
});

const Listing = new mongoose.model("Listing", listingSchema);
module.exports = Listing;
