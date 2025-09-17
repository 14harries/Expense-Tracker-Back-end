const express = require("express");
const app = express();
const connectDB = require("./config/db");
const trackerRoute = require("./routes/trackerRoutes"); // keep naming consistent
require("dotenv").config();
const cors = require('cors');

// connect DB
connectDB();
app.use(cors());
app.use(express.json());

// use routes
app.use("/api", trackerRoute);

// sample route
app.get("/", (req, res) => {
  res.send("This is the get method!!!!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server connected at http://localhost:${PORT}`);
});
