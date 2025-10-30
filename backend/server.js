const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require('path');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// Static folder for image access
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//auth
app.use("/api/auth", require("./routes/authRoutes"));
//Deal of the week  
app.use("/api/deal", require("./routes/Dealoftheweek.routes"));
//Banner
app.use("/api/banners", require("./routes/Banner.routes"));
//Category
app.use("/api/category", require("./routes/category.routes"));
//PopularProduct
app.use("/api/popularproduct", require("./routes/PopularProduct.routes"));
//LatestProduct
app.use("/api/latestproduct", require("./routes/LatestProduct.routs"));
//FeatureProduct
app.use("/api/featureproduct", require("./routes/FeatureProduct.routes"));
//CustomerReview
app.use("/api/customerreview", require("./routes/CustomerReview.router"));
//Blog
app.use("/api/blog", require("./routes/Blog.routes"));

app.get("/", (req, res) => {
  res.send("API is running...");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(` Server running on http://localhost:${PORT}`)
);