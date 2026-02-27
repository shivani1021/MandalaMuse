const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// @route POST /api/subscribe
// @desc Handle newsletter subscription
// @access Public
router.post("/", async (req, res) => {
  const { email } = req.body;

  // Validation
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Check if the email already exists
    let subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    // Save new subscriber
    subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json({
      message: "Successfully subscribed to the newsletter!",
    });
  } catch (error) {
    console.error("Error in subscription:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
