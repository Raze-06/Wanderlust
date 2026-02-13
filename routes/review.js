const express = require("express");
const router = express.Router({ mergeParams: true });
const reviewController = require("../controllers/reviews.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middlewares.js");

//Create route
router.post(
  "/",
  isLoggedIn("You must be signed in"),
  validateReview,
  wrapAsync(reviewController.createReview),
);

//Delete route
router.delete(
  "/:reviewid",
  isLoggedIn("You must be signed in"),
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview),
);

module.exports = router;
