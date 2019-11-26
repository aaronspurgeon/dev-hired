const express = require("express");
const app = express();

// Import Routes
const authRoute = require("./routes/auth");

// Route MiddleWares
app.use("/api/user", authRoute);

app.listen(8080, () => console.log("Server is up and running"));
