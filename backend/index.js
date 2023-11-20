const express = require("express");
const app = express();
const mongoose = require("mongoose");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");

const bodyParser = require('body-parser');
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.static('public'));
dotenv.config();
app.use(cors());
app.use(compression()); // Compress all routes
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const routerRoutes = require("./routes/order");
const subscriptionRoutes = require("./routes/subscription");

app.use("/order", routerRoutes);
app.use("/subscription", subscriptionRoutes);

const start = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));
  } catch (error) {
    console.log(error.message)
    process.exit(1);
  }
};
start();
