const Joi = require("joi");

const listingSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().allow("", null),
  price: Joi.number().min(0),
  location: Joi.string().required(),
  country: Joi.string().required(),
  category: Joi.string().valid(
    "Rooms",
    "Iconic Cities",
    "Mountains",
    "Villa",
    "Camping",
    "Farm House",
    "Amazing Pools",
  ),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required(),
  }).required(),
});

module.exports = { listingSchema, reviewSchema };
