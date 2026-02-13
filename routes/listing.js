const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const { isLoggedIn, isOwner, validateListing } = require("../middlewares.js");
const listingController = require("../controllers/listings.js");

//index route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn("You must be logged in to create a Listing"),
    upload.single("image"),
    validateListing,
    wrapAsync(listingController.createListing),
  );

//Create route
router.get(
  "/new",
  isLoggedIn("You must be logged in to create a Listing"),
  listingController.renderCreateForm,
);

//Show route
router
  .route("/:id")
  .get(wrapAsync(listingController.renderShowPage))
  .put(
    isLoggedIn("You must be logged in to edit this listing"),
    isOwner,
    upload.single("image"),
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  .delete(
    isLoggedIn("You must be logged in to delete this listing"),
    isOwner,
    wrapAsync(listingController.deleteListing),
  );

//Edit route
router.get(
  "/:id/edit",
  isLoggedIn("You must be logged in to edit this listing"),
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

module.exports = router;
