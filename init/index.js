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
  await mongoose.connect(
    "mongodb+srv://Raze:ye9E9pXSU4hToyY6@cluster0.pqmdams.mongodb.net/?appName=Cluster0",
  );
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((list) => ({
    ...list,
  }));
  await Listing.insertMany(initData.data);
  console.log("Database Initialized");
};
// initDB();
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

async function seedDB() {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data inserted!");
  mongoose.connection.close();
}
seedDB();
