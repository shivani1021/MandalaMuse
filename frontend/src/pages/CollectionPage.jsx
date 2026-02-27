




// import { useEffect, useState, useRef } from "react";
// import { FaFilter } from "react-icons/fa";
// import FilterSidebar from "../component/Products/FilterSidebar";
// import SortOption from "../component/Products/SortOption";
// import ProductGrid from "../component/Products/ProductGrid";

// const CollectionPage = () => {
//   const [products, setProducts] = useState([]);
//   const sidebarRef = useRef(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleClickOutside = (e) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//       setIsSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       const fetchedProducts = [
//         {
//           id: 1,
//           name: "Mandala T-Shirt",
//           price: 499,
//           images: [{ url: "https://picsum.photos/300/300?random=1" }],
//           category: "Apparel",
//         },
//         {
//           id: 2,
//           name: "Mandala Wall Clock",
//           price: 899,
//           images: [{ url: "https://picsum.photos/300/300?random=2" }],
//           category: "Home Decor",
//         },
//         {
//           id: 3,
//           name: "Handmade Mandala Drawing",
//           price: 1299,
//           images: [{ url: "https://picsum.photos/300/300?random=3" }],
//           category: "Artwork",
//         },
//         {
//           id: 4,
//           name: "Mandala Tray",
//           price: 699,
//           images: [{ url: "https://picsum.photos/300/300?random=4" }],
//           category: "Home Decor",
//         },
//         {
//           id: 5,
//           name: "Mandala Tote Bag",
//           price: 399,
//           images: [{ url: "https://picsum.photos/300/300?random=5" }],
//           category: "Accessories",
//         },
//         {
//           id: 6,
//           name: "Mandala Cushion Cover",
//           price: 299,
//           images: [{ url: "https://picsum.photos/300/300?random=6" }],
//           category: "Home Decor",
//         },
//         {
//           id: 7,
//           name: "Mandala Coasters Set",
//           price: 349,
//           images: [{ url: "https://picsum.photos/300/300?random=7" }],
//           category: "Home Decor",
//         },
//         {
//           id: 8,
//           name: "Mandala Hoodie",
//           price: 899,
//           images: [{ url: "https://picsum.photos/300/300?random=8" }],
//           category: "Apparel",
//         },
//         {
//           id: 9,
//           name: "Mandala Coffee Mug",
//           price: 249,
//           images: [{ url: "https://picsum.photos/300/300?random=9" }],
//           category: "Kitchen",
//         },
//         {
//           id: 10,
//           name: "Mandala Painting Canvas",
//           price: 1999,
//           images: [{ url: "https://picsum.photos/300/300?random=10" }],
//           category: "Artwork",
//         },
//         {
//           id: 11,
//           name: "Mandala Phone Case",
//           price: 349,
//           images: [{ url: "https://picsum.photos/300/300?random=11" }],
//           category: "Accessories",
//         },
       



//         {
//           id: 1,
//           name: "Mandala T-Shirt",
//           price: 499,
//           images: [{ url: "https://picsum.photos/300/300?random=1" }],
//           category: "Apparel",
//         },
//         {
//           id: 2,
//           name: "Mandala Wall Clock",
//           price: 899,
//           images: [{ url: "https://picsum.photos/300/300?random=2" }],
//           category: "Home Decor",
//         },
//         {
//           id: 3,
//           name: "Handmade Mandala Drawing",
//           price: 1299,
//           images: [{ url: "https://picsum.photos/300/300?random=3" }],
//           category: "Artwork",
//         },
//         {
//           id: 4,
//           name: "Mandala Tray",
//           price: 699,
//           images: [{ url: "https://picsum.photos/300/300?random=4" }],
//           category: "Home Decor",
//         },
//         {
//           id: 5,
//           name: "Mandala Tote Bag",
//           price: 399,
//           images: [{ url: "https://picsum.photos/300/300?random=5" }],
//           category: "Accessories",
//         },
        
        
//         {
//           id: 8,
//           name: "Mandala Hoodie",
//           price: 899,
//           images: [{ url: "https://picsum.photos/300/300?random=8" }],
//           category: "Apparel",
//         },
//         {
//           id: 9,
//           name: "Mandala Coffee Mug",
//           price: 249,
//           images: [{ url: "https://picsum.photos/300/300?random=9" }],
//           category: "Kitchen",
//         },
//         {
//           id: 10,
//           name: "Mandala Painting Canvas",
//           price: 1999,
//           images: [{ url: "https://picsum.photos/300/300?random=10" }],
//           category: "Artwork",
//         },
//         {
//           id: 11,
//           name: "Mandala Phone Case",
//           price: 349,
//           images: [{ url: "https://picsum.photos/300/300?random=11" }],
//           category: "Accessories",
//         },
        
         
//       ];
//       setProducts(fetchedProducts);
//     }, 1000);
//   }, []);

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
//       {/* Mobile Filter Button */}
//       <div className="lg:hidden p-4">
//         <button
//           onClick={toggleSidebar}
//           className="border p-2 flex items-center rounded-md shadow-sm bg-white"
//         >
//           <FaFilter className="mr-2" />
//           Filters
//         </button>
//       </div>

//       {/* Filter Sidebar */}
//       <div
//         ref={sidebarRef}
//         className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 lg:static lg:translate-x-0 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <FilterSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow p-4 lg:p-8">
//         <h2 className="text-2xl md:text-3xl uppercase font-bold mb-4">
//           All Collections
//         </h2>

//         {/* Sort Options */}
//         <SortOption />

//         {/* Products Grid */}
//         <div className="mt-6">
//           <ProductGrid products={products} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollectionPage;
import { useEffect, useState, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../component/Products/FilterSidebar";
import SortOption from "../component/Products/SortOption";
import ProductGrid from "../component/Products/ProductGrid";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import {  useSelector, useDispatch } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";

const CollectionPage = () => {
  const {collection} =useParams();
  const[searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const {products, loading,error, filters: reduxFilters} = useSelector((state) => state.products);
  const queryParams = Object.fromEntries([...searchParams]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect(() =>{
  //   dispatch(fetchProductsByFilters({collection, ...queryParams}))
  // },[dispatch,collection,location.search]);

  useEffect(() => {
        // 1. Start with the current Redux filters (may contain size/color filters set previously)
        let combinedFilters = { ...reduxFilters };
        
        // 2. Overwrite/add filters with current URL parameters (which include the 'search' term)
        // This ensures the URL's 'search' value takes precedence.
        combinedFilters = { ...combinedFilters, ...queryParams };
        
        // 3. Ensure the current collection is included
        combinedFilters.collection = collection;

        // 4. Dispatch the fetch with the comprehensive filter object
        dispatch(fetchProductsByFilters(combinedFilters));
        
        // Use location.search to ensure re-run when any URL parameter changes (including search)
        // Use reduxFilters to ensure re-run when the filter sidebar changes the state
    }, [dispatch, collection, location.search, reduxFilters]); // <-- Added reduxFilters dependency
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white animate-fadeIn">
      {/* Mobile Filter Button */}
      <div className="lg:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="border p-2 flex items-center rounded-md shadow-md bg-white hover:bg-gray-100 transition-all duration-300"
        >
          <FaFilter className="mr-2 text-gray-700" />
          <span className="text-gray-700 font-semibold">Filters</span>
        </button>
      </div>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl overflow-y-auto transform transition-transform duration-300 animate-slideIn lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 lg:p-8 animate-fadeIn">
        <h2 className="text-2xl md:text-3xl uppercase font-bold mb-4 text-gray-800">
          All Collections
        </h2>

        {/* Sort Options */}
        <SortOption />

        {/* Products Grid */}
        <div className="mt-6">
          <ProductGrid products={products} loading={loading} error={error} />
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out;
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slideIn {
            animation: slideIn 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default CollectionPage;
