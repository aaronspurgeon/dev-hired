const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

// Import Routes
const authRoute = require("./routes/auth");

// Route MiddleWares
app.use("/api/user", authRoute);

app.listen(8080, () => console.log("Server is up and running"));
