
// config/multerConfig.js
const cloudinary = require('cloudinary').v2; // Make sure your v2 config is already set up
const { CloudinaryStorage } = require('cloudinary-multer');
const multer = require('multer');

// --- Cloudinary Configuration (Must be done first) ---
// If you haven't done this, ensure your credentials are loaded from .env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// ----------------------------------------------------

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'ecomm-products', // Your desired folder name on Cloudinary
    allowed_formats: ['jpeg', 'png', 'jpg', 'webp'], // Specify allowed file types
    // transformation: [{ width: 500, height: 500, crop: "fill" }] // Optional: Apply transformations
  },
});

// Create the Multer upload middleware
const upload = multer({ storage: storage });

module.exports = upload;