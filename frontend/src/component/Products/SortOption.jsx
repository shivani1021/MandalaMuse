// import React from "react";
// import { useSearchParams } from "react-router-dom";

// const SortOptions = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleSortChange = (e) => {
//     const sortBy = e.target.value;
//     searchParams.set("sortBy", sortBy);
//     setSearchParams(searchParams);
//   };

//   return (
//     <div className="mb-4 flex items-center justify-end">
//       <select
//         id="sort"
//         onChange={handleSortChange}
//         value={searchParams.get("sortBy") || ""}
//         className="border p-2 rounded-md focus:outline-none text-gray-700"
//       >
//         <option value="">Default</option>
//         <option value="priceAsc">Price: Low to High</option>
//         <option value="priceDesc">Price: High to Low</option>
//         <option value="popularity">Popularity</option>
//       </select>
//     </div>
//   );
// };

// export default SortOptions;

import React from "react";
import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };

  return (
    <div className="mb-6 flex items-center justify-end pr-4">
      <label
        htmlFor="sort"
        className="mr-3 text-sm font-medium text-gray-700"
      >
        Sort By:
      </label>

      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        className="border border-gray-300 bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-gray-700 
                   focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400 transition-all duration-200"
      >
        <option value="">Default</option>
        <option value="priceAsc">💰 Price: Low to High</option>
        <option value="priceDesc">💸 Price: High to Low</option>
        <option value="popularity">⭐ Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
