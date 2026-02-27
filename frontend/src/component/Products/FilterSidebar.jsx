// import React, { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";

// const FilterSidebar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const [filters, setFilters] = useState({
//     category: "",
//     gender: "",
//     color: "",
//     size: [],
//     material: [],
//     brand: [],
//     minPrice: 0,
//     maxPrice: 10000,
//   });

//   // ✅ Update URL Search Params
//   const updateSearchParams = (updatedFilters) => {
//     const params = {
//       ...updatedFilters,
//       size: updatedFilters.size.join(","),
//       material: updatedFilters.material.join(","),
//       brand: updatedFilters.brand.join(","),
//       minPrice: String(updatedFilters.minPrice),
//       maxPrice: String(updatedFilters.maxPrice),
//     };
//     setSearchParams(params);
//     navigate(`?${new URLSearchParams(params).toString()}`);
//   };

//   // Filter Options
//   const categories = ["Apparel", "Artwork", "Home Decor", "Accessories"];
//   const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
//   const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
//   const materials = ["Cotton", "Polyester", "Leather", "Wool", "Silk", "Denim", "Linen", "Suede"];
//   const brands = ["FashionBrand", "StyleCo", "UrbanWear", "ClassicApparel", "TrendSetters", "EliteClothiers"];
//   const genders = ["Men", "Women"];

//   // ✅ Load filters from URL
//   useEffect(() => {
//     const params = Object.fromEntries([...searchParams]);
//     setFilters({
//       category: params.category || "",
//       gender: params.gender || "",
//       color: params.color || "",
//       size: params.size ? params.size.split(",") : [],
//       material: params.material ? params.material.split(",") : [],
//       brand: params.brand ? params.brand.split(",") : [],
//       minPrice: Number(params.minPrice) || 0,
//       maxPrice: Number(params.maxPrice) || 10000,
//     });
//   }, [searchParams]);

//   // ✅ Handlers
//   const handleCategoryChange = (category) => {
//     const updated = { ...filters, category };
//     setFilters(updated);
//     updateSearchParams(updated);
//   };

//   const handleGenderChange = (gender) => {
//     const updated = { ...filters, gender };
//     setFilters(updated);
//     updateSearchParams(updated);
//   };

//   const handleColorChange = (color) => {
//     const updated = { ...filters, color };
//     setFilters(updated);
//     updateSearchParams(updated);
//   };

//   const handleSizeToggle = (size) => {
//     const updatedSizes = filters.size.includes(size)
//       ? filters.size.filter((s) => s !== size)
//       : [...filters.size, size];
//     const updated = { ...filters, size: updatedSizes };
//     setFilters(updated);
//     updateSearchParams(updated);
//   };

//   const handleMaterialToggle = (material) => {
//     const updatedMaterials = filters.material.includes(material)
//       ? filters.material.filter((m) => m !== material)
//       : [...filters.material, material];
//     const updated = { ...filters, material: updatedMaterials };
//     setFilters(updated);
//     updateSearchParams(updated);
//   };

//   const handleBrandToggle = (brand) => {
//     const updatedBrands = filters.brand.includes(brand)
//       ? filters.brand.filter((b) => b !== brand)
//       : [...filters.brand, brand];
//     const updated = { ...filters, brand: updatedBrands };
//     setFilters(updated);
//     updateSearchParams(updated);
//   };

//   const handlePriceChange = (e, type) => {
//     const value = Number(e.target.value);
//     const updated =
//       type === "min"
//         ? { ...filters, minPrice: value }
//         : { ...filters, maxPrice: value };
//     setFilters(updated);
//     updateSearchParams(updated);
//   };

//   const handleReset = () => {
//     const reset = {
//       category: "",
//       gender: "",
//       color: "",
//       size: [],
//       material: [],
//       brand: [],
//       minPrice: 0,
//       maxPrice: 10000,
//     };
//     setFilters(reset);
//     updateSearchParams(reset);
//   };

//   return (
//     <div className="p-6 space-y-8 border border-gray-200 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-sm w-full max-w-xs md:max-w-sm transition-all duration-300 hover:shadow-md">
//       <h3 className="text-2xl font-semibold text-gray-800 mb-2 border-b pb-2">Filters</h3>

//       {/* ✅ Category */}
//       <div>
//         <label className="block text-gray-800 font-medium mb-3">Category</label>
//         <div className="space-y-1">
//           {categories.map((category) => (
//             <div key={category} className="flex items-center">
//               <input
//                 type="radio"
//                 name="category"
//                 checked={filters.category === category}
//                 onChange={() => handleCategoryChange(category)}
//                 className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//               />
//               <span className="text-gray-700">{category}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Gender */}
//       <div>
//         <label className="block text-gray-800 font-medium mb-3">Gender</label>
//         <div className="space-y-1">
//           {genders.map((gender) => (
//             <div key={gender} className="flex items-center">
//               <input
//                 type="radio"
//                 name="gender"
//                 checked={filters.gender === gender}
//                 onChange={() => handleGenderChange(gender)}
//                 className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
//               />
//               <span className="text-gray-700">{gender}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Color */}
//       <div>
//         <label className="block text-gray-800 font-medium mb-3">Color</label>
//         <div className="flex flex-wrap gap-3">
//           {colors.map((color) => (
//             <button
//               key={color}
//               onClick={() => handleColorChange(color)}
//               className={`w-8 h-8 rounded-full border-2 shadow-sm hover:scale-110 transition-transform duration-200 ${
//                 filters.color === color
//                   ? "ring-2 ring-blue-500 border-blue-500 scale-110"
//                   : "border-gray-300 hover:border-gray-400"
//               }`}
//               style={{ backgroundColor: color.toLowerCase() }}
//               title={color}
//             ></button>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Size */}
//       <div>
//         <label className="block text-gray-800 font-medium mb-3">Size</label>
//         <div className="flex flex-wrap gap-3">
//           {sizes.map((size) => (
//             <button
//               key={size}
//               onClick={() => handleSizeToggle(size)}
//               className={`px-3 py-1 rounded-lg border text-sm font-medium transition-all duration-200 ${
//                 filters.size.includes(size)
//                   ? "bg-blue-500 text-white border-blue-500 shadow-sm"
//                   : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//               }`}
//             >
//               {size}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Material */}
//       <div>
//         <label className="block text-gray-800 font-medium mb-3">Material</label>
//         <div className="flex flex-col gap-2">
//           {materials.map((material) => (
//             <label key={material} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={filters.material.includes(material)}
//                 onChange={() => handleMaterialToggle(material)}
//                 className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
//               />
//               <span className="text-gray-700">{material}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Brand */}
//       <div>
//         <label className="block text-gray-800 font-medium mb-3">Brand</label>
//         <div className="flex flex-col gap-2">
//           {brands.map((brand) => (
//             <label key={brand} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={filters.brand.includes(brand)}
//                 onChange={() => handleBrandToggle(brand)}
//                 className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
//               />
//               <span className="text-gray-700">{brand}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Price Range */}
//       <div>
//         <label className="block text-gray-800 font-medium mb-3">
//           Price Range (₹{filters.minPrice} - ₹{filters.maxPrice})
//         </label>
//         <div className="flex flex-col gap-3">
//           <input
//             type="range"
//             min="0"
//             max="10000"
//             value={filters.minPrice}
//             onChange={(e) => handlePriceChange(e, "min")}
//             className="w-full accent-blue-500"
//           />
//           <input
//             type="range"
//             min="0"
//             max="10000"
//             value={filters.maxPrice}
//             onChange={(e) => handlePriceChange(e, "max")}
//             className="w-full accent-blue-500"
//           />
//           <div className="flex justify-between text-gray-600 text-sm">
//             <span>₹{filters.minPrice}</span>
//             <span>₹{filters.maxPrice}</span>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Reset Button */}
//       <button
//         onClick={handleReset}
//         className="mt-6 w-full py-2.5 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 font-medium border border-blue-200 transition-all duration-200"
//       >
//         Reset Filters
//       </button>
//     </div>
//   );
// };

// export default FilterSidebar;


import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 10000,
  });

  const updateSearchParams = (updatedFilters) => {
    const params = {
      ...updatedFilters,
      size: updatedFilters.size.join(","),
      material: updatedFilters.material.join(","),
      brand: updatedFilters.brand.join(","),
      minPrice: String(updatedFilters.minPrice),
      maxPrice: String(updatedFilters.maxPrice),
    };
    setSearchParams(params);
    navigate(`?${new URLSearchParams(params).toString()}`);
  };

  const categories = ["Apparel","Hoodie", "Home Decor", "Accessories","Coffee Mug"];
  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Leather", "Wool", "Silk", "Denim", "Linen", "Suede"];
  const brands = ["FashionBrand", "StyleCo", "UrbanWear", "ClassicApparel", "TrendSetters", "EliteClothiers"];
  const genders = ["Men", "Women", "Unisex"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 10000,
    });
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    const updated = { ...filters, category };
    setFilters(updated);
    updateSearchParams(updated);
  };

  const handleGenderChange = (gender) => {
    const updated = { ...filters, gender };
    setFilters(updated);
    updateSearchParams(updated);
  };

  const handleColorChange = (color) => {
    const updated = { ...filters, color };
    setFilters(updated);
    updateSearchParams(updated);
  };

  const handleSizeToggle = (size) => {
    const updatedSizes = filters.size.includes(size)
      ? filters.size.filter((s) => s !== size)
      : [...filters.size, size];
    const updated = { ...filters, size: updatedSizes };
    setFilters(updated);
    updateSearchParams(updated);
  };

  const handleMaterialToggle = (material) => {
    const updatedMaterials = filters.material.includes(material)
      ? filters.material.filter((m) => m !== material)
      : [...filters.material, material];
    const updated = { ...filters, material: updatedMaterials };
    setFilters(updated);
    updateSearchParams(updated);
  };

  const handleBrandToggle = (brand) => {
    const updatedBrands = filters.brand.includes(brand)
      ? filters.brand.filter((b) => b !== brand)
      : [...filters.brand, brand];
    const updated = { ...filters, brand: updatedBrands };
    setFilters(updated);
    updateSearchParams(updated);
  };

  const handlePriceChange = (e, type) => {
    const value = Number(e.target.value);
    const updated =
      type === "min"
        ? { ...filters, minPrice: value }
        : { ...filters, maxPrice: value };
    setFilters(updated);
    updateSearchParams(updated);
  };

  const handleReset = () => {
    const reset = {
      category: "",
      gender: "",
      color: "",
      size: [],
      material: [],
      brand: [],
      minPrice: 0,
      maxPrice: 10000,
    };
    setFilters(reset);
    updateSearchParams(reset);
  };

  return (
    <div className="p-6 space-y-8 rounded-1xl shadow-lg w-full max-w-xs md:max-w-sm transition-all duration-300 bg-[rgb(160_82_45_/_var(--tw-bg-opacity))] animate-fadeIn hover:shadow-2xl">
      <h3 className="text-2xl font-semibold text-white mb-2 border-b pb-2">Filters</h3>

      {/* Category */}
      <div>
        <label className="block text-white font-medium mb-3">Category</label>
        <div className="space-y-1">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={filters.category === category}
                onChange={() => handleCategoryChange(category)}
                className="mr-2 h-4 w-4 text-blue-400 focus:ring-blue-300 border-gray-200"
              />
              <span className="text-white">{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div>
        <label className="block text-white font-medium mb-3">Gender</label>
        <div className="space-y-1">
          {genders.map((gender) => (
            <div key={gender} className="flex items-center">
              <input
                type="radio"
                name="gender"
                checked={filters.gender === gender}
                onChange={() => handleGenderChange(gender)}
                className="mr-2 h-4 w-4 text-blue-400 focus:ring-blue-300 border-gray-200"
              />
              <span className="text-white">{gender}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <label className="block text-white font-medium mb-3">Color</label>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 shadow-sm hover:scale-110 transition-transform duration-200 ${
                filters.color === color
                  ? "ring-2 ring-blue-400 border-blue-400 scale-110"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            ></button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <label className="block text-white font-medium mb-3">Size</label>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`px-3 py-1 rounded-lg border text-sm font-medium transition-all duration-200 ${
                filters.size.includes(size)
                  ? "bg-blue-400 text-white border-blue-400 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <label className="block text-white font-medium mb-3">Material</label>
        <div className="flex flex-col gap-2">
          {materials.map((material) => (
            <label key={material} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.material.includes(material)}
                onChange={() => handleMaterialToggle(material)}
                className="h-4 w-4 text-blue-400 focus:ring-blue-300 border-gray-200 rounded"
              />
              <span className="text-white">{material}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <label className="block text-white font-medium mb-3">Brand</label>
        <div className="flex flex-col gap-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.brand.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="h-4 w-4 text-blue-400 focus:ring-blue-300 border-gray-200 rounded"
              />
              <span className="text-white">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <label className="block text-white font-medium mb-3">
          Price Range (₹{filters.minPrice} - ₹{filters.maxPrice})
        </label>
        <div className="flex flex-col gap-3">
          <input
            type="range"
            min="0"
            max="10000"
            value={filters.minPrice}
            onChange={(e) => handlePriceChange(e, "min")}
            className="w-full accent-blue-400"
          />
          <input
            type="range"
            min="0"
            max="10000"
            value={filters.maxPrice}
            onChange={(e) => handlePriceChange(e, "max")}
            className="w-full accent-blue-400"
          />
          <div className="flex justify-between text-white text-sm">
            <span>₹{filters.minPrice}</span>
            <span>₹{filters.maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={handleReset}
        className="mt-6 w-full py-2.5 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 font-medium border border-blue-200 transition-all duration-200"
      >
        Reset Filters
      </button>

      {/* Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default FilterSidebar;
