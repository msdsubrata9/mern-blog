const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./modals/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const secret = "dfsajkhdjfah134123hsadjhksdjfadks";
const saltRounds = 10;

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://msdsubrata9:Subrata1234@namastenode.qgsag.mongodb.net/blogApplication"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, saltRounds),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passwordOk = bcrypt.compareSync(password, userDoc.password);
  if (passwordOk) {
    // login successful
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw new Error(err);
      res.cookie("token", token).json({ id: userDoc._id, username });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw new Error(err);
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.listen(4000);
