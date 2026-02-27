// import { useState } from "react";

// const EditProductPage = () => {

// const [productData, setProductData] = useState({
// name: "",
// description:"",
// price: 0,
// countInStock: 0,
// sku: "",
// category: "",
// brand: "",
// sizes: [],
// colors: [],
// collections: "",
// material: "",
// gender: "",
// images: [
//     {
//         url: "https://picsum.photos/150?random=1"
//     },

//      {
//         url: "https://picsum.photos/150?random=2"
//     },
// ]
// });

// const handleChange = (e) => {
//   const { name, value } = e.target;

//   setProductData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };

// const handleImageUpload = async (e)=> {
//     const file= e.target.files[0];
//     console.log(file);
// }

// const handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log(productData);
// };


//   return (
//     <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md'>
//         <h2 className="text-3xl font-bold mb-6"> Edit product</h2>

        
//         <form onSubmit={handleSubmit}>
//             {/* Name */}
//             <div className="mb-6">
//                 <label className="block font-semibold mb-2">Product Name</label>
//                 <input type="text"
//                 name ="name"
//                 value={productData.name}
//                 onChange={handleChange}
//                 className=' w-full border border-gray-300 rounded-md p-2'
//                 required />
//             </div>



//              {/* Description */}
//                  <div className="mb-6">
//                 <label className="block font-semibold mb-2"> Description</label>

//                 <textarea
//                 name ="description"
//                 value={productData.description}
//                 onChange={handleChange}
//                 className=' w-full border border-gray-300 rounded-md p-2'
//                 rows={4}
//                 required />
//             </div>

//             {/* Price */}

//              <div className="mb-6">
//                 <label className="block font-semibold mb-2">Price</label>
//                 <input type="number"
//                 name ="price"
//                 value={productData.price}
//                 onChange={handleChange}
//                 className=' w-full border border-gray-300 rounded-md p-2'
//                  />
//             </div>

//               {/* Count In stock */}

//              <div className="mb-6">
//                 <label className="block font-semibold mb-2"> Count in Stock</label>
//                 <input type="number"
//                 name ="countInStock"
//                 value={productData.countInStock}
//                 onChange={handleChange}
//                 className=' w-full border border-gray-300 rounded-md p-2'
//               />
//             </div>


// {/* SKU */}
//              <div className="mb-6">
//                 <label className="block font-semibold mb-2">SKU</label>
//                 <input type="text"
//                 name ="sku"
//                 value={productData.sku}
//                 onChange={handleChange}
//                 className=' w-full border border-gray-300 rounded-md p-2'
//               />
//             </div>


//             {/* Size */}
//              <div className="mb-6">
//                 <label className="block font-semibold mb-2">Sizes (comma-separated)</label>
//                 <input type="text"
//                 name ="sizes"
//                 value={productData.sizes.join(",")}
//                 onChange={(e)=> setProductData ({...productData, sizes: e.target.value.split (",").map((size)=> size.trim()),

//                 })}
//                 className=' w-full border border-gray-300 rounded-md p-2'
//               />
//             </div>


//                       {/* colors */}
//              <div className="mb-6">
//                 <label className="block font-semibold mb-2">Colors (comma-separated)</label>
//                 <input type="text"
//                 name ="colors"
//                 value={productData.colors.join(",")}
//                 onChange={(e)=> setProductData ({...productData, colors: e.target.value.split (",").map((colors)=> colors.trim()),
                    
//                 })}
//                 className=' w-full border border-gray-300 rounded-md p-2'
//               />
//             </div>

             

//              {/* Image Upload */}
//              <div className="mb-6">
//              <label className="block font-semibold mb-2">Upload Image</label>
//                <input type="file" onChange={handleImageUpload} /> 
//                <div className="flex gap-4 mt-4">{productData.images.map((image,index)=>(
//                 <div key={index}>
//                     <img src={image.url} alt={image.altText || "product Image"}
//                     className="w-20 h-20 object-cover rounded-md shadow-md" />
//                 </div>
//                ))}</div>
//              </div>
 
         
//            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">Update Product</button>


//         </form>
      
//     </div>
//   )
// }

// export default EditProductPage


import { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      { url: "https://picsum.photos/150?random=1" },
      { url: "https://picsum.photos/150?random=2" },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-gray-100">
      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide animate-fadeIn
                       bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Edit Product
        </h2>

        {/* Form Card */}
        <div className="backdrop-blur-xl bg-gray-800/70 shadow-xl rounded-2xl p-6 
                        border border-gray-700 animate-slideUp">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Product Name</label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                           focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                name="description"
                value={productData.description}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                           focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block mb-1 font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                           focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Count in Stock */}
            <div>
              <label className="block mb-1 font-medium">Count In Stock</label>
              <input
                type="number"
                name="countInStock"
                value={productData.countInStock}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                           focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* SKU */}
            <div>
              <label className="block mb-1 font-medium">SKU</label>
              <input
                type="text"
                name="sku"
                value={productData.sku}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                           focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Sizes */}
            <div>
              <label className="block mb-1 font-medium">Sizes (comma-separated)</label>
              <input
                type="text"
                name="sizes"
                value={productData.sizes.join(",")}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    sizes: e.target.value.split(",").map((s) => s.trim()),
                  })
                }
                className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                           focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Colors */}
            <div>
              <label className="block mb-1 font-medium">Colors (comma-separated)</label>
              <input
                type="text"
                name="colors"
                value={productData.colors.join(",")}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    colors: e.target.value.split(",").map((c) => c.trim()),
                  })
                }
                className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                           focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block mb-2 font-medium">Upload Image</label>

              <input
                type="file"
                onChange={handleImageUpload}
                className="p-3 rounded-xl bg-gray-900 border border-gray-700 
                           w-full cursor-pointer focus:ring-2 focus:ring-blue-500 transition"
              />

              {/* Image Preview */}
              <div className="flex gap-4 mt-4">
                {productData.images.map((image, index) => (
                  <div
                    key={index}
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={image.url}
                      className="w-20 h-20 rounded-xl border border-gray-700 shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-xl shadow 
                         transition transform hover:-translate-y-1"
            >
              Update Product
            </button>

          </form>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.7s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-slideUp {
            animation: slideUp 0.6s ease-in-out;
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default EditProductPage;
