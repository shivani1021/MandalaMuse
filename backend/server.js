const dotenv = require("dotenv")
dotenv.config();


const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");

const app = express();
app.use(express.json());
app.use(cors());


console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

// Connect to MongoDb
connectDB();

app.get("/", (req, res) => {
    res.send("WELCOME TO MY API!");
});

// API Routes
// 1. Users are handled at /api/users
app.use("/api/users", userRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Products are now handled at the standard plural REST path: /api/products
// This fixes the path to match standard convention, but the client must update their call.
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/subscribe", subscriberRoutes);

// 3. Admin routes
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});