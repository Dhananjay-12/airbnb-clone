const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const User = require("./models/User");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
    exposedHeaders: ["set-cookie"],
  })
);

mongoose.connect(process.env.MONGO_URL);

const PORT = 3000;
const jwtSecret = "lksjjfoiwf92r0j299r320r";

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register", async (req, res) => {
  const { data } = req.body;

  try {
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: bcrypt.hashSync(data.password, bcrypt.genSaltSync(12)),
    });
    //   res.json({ name: data.name, email: data.email, password: data.password });
    res.json(user);
  } catch (err) {
    res.status(422).json({
      message: err.message,
    });
  }
});

app.post("/login", async (req, res) => {
  const { data } = req.body;
  try {
    // Find the user
    const user = await User.findOne({ email: data.email });
    // Check if user exists
    if (!user) {
      throw new Error("User not found");
    }
    // Check the password
    const passValid = bcrypt.compareSync(data.password, user.password);
    if (!passValid) {
      throw new Error("Incorrect password");
    }

    jwt.sign(
      { email: user.email, id: user._id },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json(user);
      }
    );

    // res.json("SUCCESS");
  } catch (err) {
    res.status(400).json(err.message);
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, cookieData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(cookieData.id);
      res.json({ name, email, _id });
    });
  }
  // res.json(token);
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});
app.listen(PORT, () => console.log(`Listening at port: ${PORT}`));
