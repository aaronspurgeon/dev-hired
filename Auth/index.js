const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

app.use(cors());
// Import Routes
const authRoute = require("./routes/auth");
const jobsRoute = require("./routes/jobs");

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

// Middleware
app.use(express.json());

// Route MiddleWares
app.use("/api/user", authRoute);
app.use("/api/jobs", jobsRoute);

app.listen(8080, () => console.log("Server is up and running"));
