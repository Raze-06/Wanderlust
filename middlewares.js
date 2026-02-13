const Listing = require("./models/listing.js");
const ExpressError = require("./utils/ExpressError.js");
let { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

module.exports.isLoggedIn = (message) => {
  return (req, res, next) => {
    if (!req.isAuthenticated()) {
      if (req.method === "GET") {
        req.session.pathName = req.originalUrl;
      } else {
        req.session.pathName = "/listings";
      }
      req.flash("error", message);
      return res.redirect("/login");
    }
    next();
  };
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.pathName) {
    res.locals.redirectUrl = req.session.pathName;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  const list = await Listing.findById(id);
  if (!list.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You don't have permission to edit");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    errMsg = error.details.map((el) => el.message).join(",");
    next(new ExpressError(400, errMsg));
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    errMsg = error.details.map((el) => el.message).join(",");
    next(new ExpressError(400, errMsg));
  } else {
    next();
  }
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewid } = req.params;
  const review = await Review.findById(reviewid);
  if (!review.author._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not author of this review.");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
