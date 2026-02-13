const Listing = require("../models/listing");
const cloudinary = require("cloudinary").v2;
const { forwardGeocode } = require("../utils/geoapify");

module.exports.index = async (req, res) => {
  const { category, search } = req.query;

  let filter = {};

  // Category filter
  if (category) {
    filter.category = category;
  }

  // Search filter
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { country: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
    ];
  }

  const allListing = await Listing.find(filter);

  res.render("listings/index.ejs", { allListing, category, search });

  // let allListing = await Listing.find({});
  // res.render("listings/index.ejs", { allListing });
};

module.exports.renderCreateForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res) => {
  const { location } = req.body;
  let url = req.file.path;
  let fileName = req.file.filename;
  const geoData = await forwardGeocode(location);

  if (!geoData) {
    req.flash("error", "Invalid location. Please try again.");
    return res.redirect("/listings/new");
  }
  const newListing = new Listing(req.body);
  newListing.owner = req.user._id;
  newListing.image = { url, fileName };
  newListing.geometry = {
    type: "Point",
    coordinates: [geoData.lng, geoData.lat],
  };

  await newListing.save();
  req.flash("success", "New Listing Added !!");
  res.redirect("/listings");
};

module.exports.renderShowPage = async (req, res) => {
  let { id } = req.params;
  let list = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!list) {
    req.flash("error", "listing you requested for does not exist!!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { list });
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let list = await Listing.findById(id);
  if (!list) {
    req.flash("error", "listing you requested for does not exist!!");
    return res.redirect("/listings");
  }
  let currentImageUrl = list.image.url;
  currentImageUrl = currentImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { list, currentImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  const updatedListing = req.body;
  const listing = await Listing.findByIdAndUpdate(id, updatedListing);
  if (req.file) {
    await cloudinary.uploader.destroy(listing.image.fileName);
    let url = req.file.path;
    let fileName = req.file.filename;
    listing.image = { url, fileName };
    await listing.save();
  }
  req.flash("success", " Listing Updated Successfully !!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  const list = await Listing.findById(id);
  await cloudinary.uploader.destroy(list.image.fileName);
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", " Listing Deleted Successfully !!");
  console.log(deletedListing);
  res.redirect("/listings");
};
