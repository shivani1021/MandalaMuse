// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   discountPrice: {
//     type: Number,
//   },
//   countInStock: {
//     type: Number,
//     required: true,
//     default: 0,
//   },

// sku: {
// type: String,
// unique: true,
// required: true,
// },
// category: {
// type: String,
// required: true,
// },

// sizes: {
//     type: [String],
   
// },
// colors:{
//     type: [String],
   
// },

// collections: {
//     type: String,
//     required:true,
// },

// material:{
//     type: String,
// },

// gender:{
//     type: String,
//     enum: ["Men", "Women", "Unisex"],
// },

// images: [
//     {
//         url:{
//             type:String,
//             required: true,
//         },

//         altText:{
//             type: String,
//         },
//     },
// ],

// isFeatured:{
//     type: Boolean,
//     default: false,
// },
// isPublished: {
//     type: Boolean,
//     default: false,
// },

// rating:{
//     type: Number,
//     default:0,
// },
// numReviews: {
//     type: Number,
//     default: 0,
// },
// tags: [String],
// user:{
//     type: mongoose.Schema.Types.ObjectId,
//     ref:"User",
//     required: true,
// },
// metaTitle:{
//     type: String,
// },
// metaDescription:{
//     type: String,
// },

// metaKeywords:{
//     type: String,
// },

// dimensions:{
//     length: Number,
//     width: Number,
//     height: Number,
// },
// weight: Number,



// }, { timestamps: true }); // Optional: adds createdAt and updatedAt

// module.exports = mongoose.model("Product", productSchema);


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // --- ADJUSTMENT 1: Explicitly define _id as String ---
    // This is critical because your product.js data uses string IDs (e.g., "66A00001").
    _id: {
        type: String,
        required: true,
    },
    // --------------------------------------------------------
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },

    sku: {
        type: String,
        unique: true,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },

    sizes: {
        type: [String],
    },
    colors: {
        type: [String],
    },

    collections: {
        type: String,
        required: true,
    },

    material: {
        type: String,
    },

    gender: {
        type: String,
        enum: ["Men", "Women", "Unisex"],
    },

    images: [
        {
            url: {
                type: String,
                required: true,
            },

            altText: {
                type: String,
            },
        },
    ],

    isFeatured: {
        type: Boolean,
        default: false,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },

    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    tags: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // --- ADJUSTMENT 2: Set 'required: false' for seeding OR ensure a default user ID is provided ---
        // Since your seed data (product.js) doesn't contain a user field, it will fail 
        // validation if this is required. I recommend making it optional for seeding.
        required: false, 
    },
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },

    metaKeywords: {
        type: String,
    },

    dimensions: {
        length: Number,
        width: Number,
        height: Number,
    },
    weight: Number,


}, { timestamps: true });

// Prevent Mongoose from trying to automatically create a standard ObjectId
// when a custom string _id is provided.
productSchema.set('autoIndex', true);


module.exports = mongoose.model("Product", productSchema);