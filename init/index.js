const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((list) => ({
    ...list,
  }));
  await Listing.insertMany(initData.data);
  console.log("Database Initialized");
};
initDB();
// const deleteRecord = async () => {
//   const list = await Listing.findByIdAndDelete("693e52f9a3379bfb93b1a204");
//   console.log(list);
// };
// deleteRecord();
// const del = async () => {
//   const list = await Listing.findByIdAndUpdate("68df870a2db85122efd9f92b", {
//     $pull: { reviews: "69463cd14f3c04438e903a4a" },
//   });
//   console.log(list);
// };
// del();
