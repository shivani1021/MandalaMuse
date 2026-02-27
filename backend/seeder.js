// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const Product = require("./models/Product");
// const User = require("./models/User");
// const Cart = require("./models/Cart");
// const products = require("./data/products");

// dotenv.config();

// const seedData = async () => {
//   try {
//     // ✅ Connect to MongoDB (await ensures connection before seeding)
//     await mongoose.connect(process.env.MONGO_URI);

//     // 🧹 Clear existing data
//     await Product.deleteMany();
//     await User.deleteMany();
//     await Cart.deleteMany();

//     // 👤 Create a default admin user
//     const createdUser = await User.create({
//       name: "Admin User",
//       email: "admin@example.com",
//       password: "123456",
//       role: "admin",
//     });

//     // 🪄 Assign the admin user's ID to each product
//     const userID = createdUser._id;
//     const sampleProducts = products.map((product) => ({
//       ...product,
//       user: userID,
//     }));

//     // 📦 Insert sample products
//     await Product.insertMany(sampleProducts);

//     console.log("🎉 Product data seeded successfully!");
//     process.exit();
//   } catch (error) {
//     console.error("❌ Error seeding the data:", error);
//     process.exit(1);
//   }
// };

// // ✅ Call the function
// seedData();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/products"); // <- correct path

dotenv.config();

const seedData = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Delete old data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    console.log("Old data removed");

    // Create admin user
    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    // Attach admin user ID to each product
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser._id,
    }));

    // Insert new products
    await Product.insertMany(sampleProducts);

    console.log("🎉 Product data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding the data:", error);
    process.exit(1);
  }
};

// Run the function
seedData();

