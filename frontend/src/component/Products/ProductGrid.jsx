


// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const ProductGrid = ({ products = [], scrollable = false }) => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     if (!scrollable || !scrollRef.current) return;

//     const scrollContainer = scrollRef.current;
//     let scrollSpeed = 0.7;
//     let animationFrame;

//     // Duplicate content for seamless scroll
//     const cloneContent = () => {
//       const children = Array.from(scrollContainer.children);
//       children.forEach((child) => scrollContainer.appendChild(child.cloneNode(true)));
//     };
//     cloneContent();

//     const scroll = () => {
//       scrollContainer.scrollLeft += scrollSpeed;
//       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//         scrollContainer.scrollLeft = 0;
//       }
//       animationFrame = requestAnimationFrame(scroll);
//     };

//     animationFrame = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [scrollable]);

//   return (
//     <div
//       ref={scrollRef}
//       className={`${
//         scrollable
//           ? "flex overflow-x-auto gap-6 pb-6 px-4 sm:px-6"
//           : "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 justify-items-center"
//       } bg-gradient-to-r from-[#f9fafb] via-[#f4f4f4] to-[#fafafa] rounded-3xl py-6 shadow-inner`}
//     >
//       {products.map((product, index) => (
//         <Link
//           key={index}
//           to={`/product/${product._id || product.id}`}
//           className={`${
//             scrollable ? "flex-shrink-0 w-64 sm:w-72" : "w-full max-w-xs"
//           } group`}
//         >
//           <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.03] border border-gray-100 w-full">
//             <div className="w-full h-48 sm:h-56 mb-4 overflow-hidden rounded-t-3xl">
//               <img
//                 src={product.images?.[0]?.url || product.image?.[0]?.url || "https://via.placeholder.com/300"}
//                 alt={product.images?.[0]?.altText || product.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold mb-1 text-gray-800 truncate">{product.name}</h3>
//               <p className="text-gray-900 font-bold text-lg">₹ {product.price}</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;


import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products,loading, error, scrollable = false }) => {
  if(loading){
    return <p>Loading...</p>;
  }

  if (error){
    return <p>Error:{error}</p>
  }
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollable || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let scrollSpeed = 0.7;
    let animationFrame;

    // Duplicate children for infinite scroll
    const cloneContent = () => {
      const children = Array.from(scrollContainer.children);
      children.forEach((child) =>
        scrollContainer.appendChild(child.cloneNode(true))
      );
    };
    cloneContent();

    const scroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollable]);

  return (
    <div
      ref={scrollRef}
      className={`${
        scrollable
          ? `
            flex overflow-x-auto gap-6 pb-4
            px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-40
          `
          : `
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6
            px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-56
          `
      }
       sm:py-12 lg:py-16
      my-6 sm:my-10 
      bg-white
      transition-all duration-300
    `}
    >
      {products.map((product, index) => (
        <Link
          key={index}
          to={`/product/${product._id || product.id}`}
          className={`${scrollable ? "flex-shrink-0 w-56 sm:w-64" : "w-full"} group`}
        >
          <div
            className="
              bg-[#f8f9fa]
              rounded-2xl
              shadow-sm
              hover:shadow-2xl
              transition-all duration-300
              hover:-translate-y-2
              overflow-hidden
              border border-gray-200
            "
          >
            {/* Product Image */}
            <div className="w-full h-40 sm:h-48 overflow-hidden">
              <img
                src={product.images?.[0]?.url}
                alt={product.name }
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* Product Info */}
            <div className="p-3 text-center">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-gray-900 font-bold mt-1">
                ₹ {product.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
