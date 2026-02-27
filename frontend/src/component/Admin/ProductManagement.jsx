// import React from 'react'
// import { Link } from "react-router-dom";


// const ProductManagement = () => {
// const products =[
//     {
//         _id: 1,
//         name:" T-shirt",
//         price : 110,
//         sku: "123123123"
//     },
// ]

// const handleDelete =(id) =>{
//     if(window.confirm(" Are you sure you want to delete the Product?")){
//         console.log("Delete Product with id");
//     }
// }
//   return (
//     <div className='max-w-7xl mx-auto p-6'>
//         <h2 className="text-2xl font-bold mb-6"> Product Management</h2>
//         <div className="overflow-x-auto shadow-md sm:rounded-lg">
//             <table className='min-w-full text-left text-gray-500'>
//                 <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
//                     <tr>
//                         <th className='py-3 px-4'> Name</th>
//                         <th className='py-3 px-4'> Price </th>
//                         <th className='py-3 px-4'> SKU</th>
//                         <th className='py-3 px-4'> Action</th>
//                         </tr>
//                         </thead>
//                         <tbody> {products.length>0 ? products.map ((products)=>(
//                             <tr key={products._id}
//                             className='border-b hover:bg-gray-50 cursor-pointer'
//                             > <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
//                                 {products.name}
//                             </td>

//                             <td className="p-4">${products.price}</td>
//                             <td className="p-4">{products.sku}</td>
//                             <td className="p-4">
//                                 <Link to={`/admin/products/${products._id}/edit` } 
//                                 className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600">Edit</Link>

//                                 <button onClick={() => handleDelete(products._id)}
//                                   className ="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 "  >
//                                      Delete</button>
//                             </td>

//                             </tr>
//                         ) ): (<tr>
//                             <td colSpan={4} className='p-4 text-center text-gray-500'> No products found</td>
//                         </tr>)}</tbody>
//                         </table> 
//                         </div>
     
//     </div>
//   )
// }

// export default ProductManagement


import React from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      _id: 1,
      name: "T-shirt",
      price: 110,
      sku: "123123123",
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the Product?")) {
      console.log("Delete Product with id");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-gray-100">
      <div className="max-w-5xl mx-auto"> {/* Same width as UserManagement */}

        {/* Page Title */}
        <h2
          className="text-4xl font-extrabold mb-8 tracking-wide animate-fadeIn
                     bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
        >
          Product Management
        </h2>

        {/* Product Table */}
        <div
          className="overflow-x-auto backdrop-blur-xl bg-gray-800/80 shadow-xl 
                     border border-gray-700 rounded-2xl animate-slideUp p-6"
        >
          <table className="min-w-full">
            <thead className="bg-gray-700 text-gray-200 text-sm uppercase">
              <tr>
                <th className="p-4 text-start">Name</th>
                <th className="p-4 text-start">Price</th>
                <th className="p-4 text-start">SKU</th>
                <th className="p-4 text-start">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr
                    key={product._id}
                    className="border-b border-gray-700 hover:bg-gray-700/50 transition 
                               animate-fadeRow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <td className="p-4 font-semibold">{product.name}</td>
                    <td className="p-4">₹{product.price}</td>
                    <td className="p-4">{product.sku}</td>

                    <td className="p-4 flex gap-3">
                      {/* Edit Button */}
                      <Link
                        to={`/admin/products/${product._id}/edit`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white 
                                   px-4 py-2 rounded-lg shadow transition"
                      >
                        Edit
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 
                                   rounded-lg shadow transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-4 text-center text-gray-400 py-6 text-lg"
                  >
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shared animations (same as UserManagement) */}
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

          .animate-fadeRow {
            animation: fadeRow 0.5s ease forwards;
            opacity: 0;
          }
          @keyframes fadeRow {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ProductManagement;
