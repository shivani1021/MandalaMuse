const express = require("express") ;
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");
const router = express. Router( ) ;
const Cart = require("../models/Cart");


// @route POST /api/orders
// @desc Create new order from checkout
// @access Private
router.post("/", protect, async (req, res) => {
  try {
    const {
      user,
      checkoutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus,
      paymentDetails
    } = req.body;

    if (!checkoutItems || checkoutItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const normalizedStatus = paymentStatus?.toLowerCase() || "pending";

    const newOrder = await Order.create({
      user: req.user._id,
      orderItems: checkoutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      isPaid: paymentStatus === "paid",
      paymentStatus,
      paymentDetails,
      paidAt: paymentStatus === "paid" ? Date.now() : null,
    });

    // ✅ Clear the cart after successful order
await Cart.findOneAndUpdate(
  { user: req.user._id },
  { products: [], totalPrice: 0 }
);

    res.status(201).json(newOrder);

  } catch (error) {
    console.error("Order Creation Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});



// @route GET /api/orders/my-orders
// @desc Get logged-in user's orders
// @access Private
router.get("/my-orders", protect, async (req, res) => {
try {
// Find orders for the authenticated user
const orders = await Order.find({ user: req.user._id }).sort({
createdAt: -1,
}); // sort by most recent orders
res.json(orders);
}catch (error) {
    console.error(error);
    res.status(500).json({message: "Server Error"})
}
});



//@route GET /api/orders/:id
//@desc vGet order details by ID
//@access Private

router.get("/:id", protect, async (req, res) => {
  try {
    // Find order by ID and populate user name and email
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Return the full order details
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;