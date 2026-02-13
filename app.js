if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
const methodOverride = require("method-override");
const flash = require("connect-flash");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const ExpressError = require("./utils/ExpressError.js");
const listing = require("./routes/listing.js");
const review = require("./routes/review.js");
const user = require("./routes/user.js");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(process.env.ATLASDB_KEY);
}

const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_KEY,
  touchAfter: 24 * 3600,
  crypto: {
    secret: process.env.SECRET,
  },
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

//authentication
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  res.locals.redirectUrl = req.session.pathName;
  res.locals.search = req.query.search || "";
  next();
});

// app.get("/demouser", async (req, res) => {
//   const fakeUser = new User({
//     email: "shivrajchavan90@gmail.com",
//     username: "Shivraj",
//   });
//   let registeredUser = await User.register(fakeUser, "helloworld");
//   res.send(registeredUser);
// });

// app.get("/", (req, res) => {
//   res.send("root is working");
// });

app.use("/listings", listing);
app.use("/listings/:id/reviews", review);
app.use("/", user);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not Found"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong" } = err;
  res.status(status).render("listings/error.ejs", { message });
});
app.listen(8080, () => {
  console.log("app is listening...");
});
