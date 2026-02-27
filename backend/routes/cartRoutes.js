const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Helper: Get cart by userId or guestId
// const getCart = async (userId, guestId) => {
//   if (userId) return await Cart.findOne({ user: userId });
//   if (guestId) return await Cart.findOne({ guestId });
//   return null;
// };

// In cartRoutes.js:

// Helper: Get cart by userId or guestId with fallback
const getCart = async (userId, guestId) => {
    // 1. If userId is provided, first try to find the cart linked to the user.
    if (userId) {
        const userCart = await Cart.findOne({ user: userId });
        if (userCart) {
            console.log("Found cart by userId:", userId);
            return userCart;
        }
    }
    
    // 2. If the user cart was not found (or userId was not provided), try the guestId.
    if (guestId) {
        const guestCart = await Cart.findOne({ guestId });
        if (guestCart) {
            console.log("Found cart by guestId:", guestId);
            return guestCart;
        }
    }
    
    // 3. If neither is found
    return null;
};

// POST /api/cart - add product
router.post("/", async (req, res) => {
  const { productId, quantity = 1, size, color, guestId, userId } = req.body || {};

  if (!productId) return res.status(400).json({ message: "productId is required" });

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await getCart(userId, guestId);

    if (cart) {
      const index = cart.products.findIndex(
        (p) => p.productId.toString() === productId && p.size === size && p.color === color
      );

      if (index > -1) {
        cart.products[index].quantity += quantity;
      } else {
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0]?.url || "",
          price: product.price,
          size,
          color,
          quantity,
        });
      }

      cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
      await cart.save();
      return res.status(200).json(cart);
    } else {
      const newCart = await Cart.create({
        user: userId || undefined,
        guestId: guestId || "guest_" + Date.now(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0]?.url || "",
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// PUT /api/cart - update quantity
router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const index = cart.products.findIndex(
      (p) => p.productId.toString() === productId && p.size === size && p.color === color
    );

    if (index > -1) {
      if (quantity > 0) {
        cart.products[index].quantity = quantity;
      } else {
        cart.products.splice(index, 1);
      }

      cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

// DELETE /api/cart - remove product
router.delete("/", async (req, res) => {
  const { productId, size, color, guestId, userId } = req.body;
  // ADD THIS LOG:
    console.log("DELETE Request Body:", req.body)

  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const index = cart.products.findIndex(
      (p) => p.productId.toString() === productId && p.size === size && p.color === color
    );

    if (index > -1) {
      cart.products.splice(index, 1);
      cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

// GET /api/cart - fetch cart
router.get("/", async (req, res) => {
  const { userId, guestId } = req.query;

  try {
    const cart = await getCart(userId, guestId);
    if (cart) return res.json(cart);
    return res.status(404).json({ message: "Cart not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST /api/cart/merge - merge guest cart
router.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body;

  try {
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    if (!guestCart) return res.status(404).json({ message: "Guest cart not found" });

    if (userCart) {
      guestCart.products.forEach((guestItem) => {
        const index = userCart.products.findIndex(
          (item) =>
            item.productId.toString() === guestItem.productId.toString() &&
            item.size === guestItem.size &&
            item.color === guestItem.color
        );

        if (index > -1) {
          userCart.products[index].quantity += guestItem.quantity;
        } else {
          userCart.products.push(guestItem);
        }
      });

      userCart.totalPrice = userCart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
      await userCart.save();
      await Cart.findOneAndDelete({ guestId });

      return res.status(200).json(userCart);
    } else {
      guestCart.user = req.user._id;
      guestCart.guestId = undefined;
      await guestCart.save();
      return res.status(200).json(guestCart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
