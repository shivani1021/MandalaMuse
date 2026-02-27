// import React from 'react'

// const OrderManagement = () => {
//     const orders =[
//         {
//             _id: 12312321,
//             user:{
//                 name: " John Doe",
//             },

//             totalPrice: 110,
//             status: "Processing"
//         }
//     ];

//  const handlestatusChange = (orderId, status) =>{
//     console.log({id: orderId, status});
//  };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
// <h2 className="text-2xl font-bold mb-6">Order Management</h2>

// <div className="overflow-x-auto shadow-md sm: rounded-lg">
// <table className="min-w-full text-left [text-gray-500">
// <thead className="bg-gray-100 text-xs uppercase Otext-gray-700">
// <tr>
// <th className="py-3 px-4">Order ID</th>
// <th className="py-3 px-4">Customer</th>
// <th className="py-3 px-4">Total Price</th>
// <th className="py-3 px-4">Status</th>
// <th className="py-3 px-4">Actions</th>
// </tr>
// </thead>
// <tbody>
//   {orders.length > 0 ? (
//     orders.map((order) => (
//       <tr
//         key={order._id}
//         className="border-b hover:bg-gray-100 transition-colors cursor-pointer"
//       >
//         <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
//           #{order._id}
//         </td>
//         <td className='p-4'>{order.user.name}</td>
//         <td className='p-4'>₹{order.totalPrice}</td>
//         <td className='p-4'>
//             <select value={order.status} onChange={(e) => handlestatusChange (order._id , e.target.value)
            
//             } 
//             className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' >
//                 <option value="Processing">Processing</option>
//                 <option value="Shipped">Shipped</option>
//                 <option value="Delivered">Delivered</option>
//                 <option value="Cancelled">Cancelled</option>
//                 </select>{}</td>
//         <td className='p-4'>
//             <button onClick={() =>handlestatusChange(order._id,"Delivered")}
//                 className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
//                     Mark as Delivered
//                 </button>
//         </td>
//       </tr>
//     ))
//   ) : (
//     <tr>
//       <td  colSpan={5} className="text-center p-4 text-gray-500">No Orders found</td>
//     </tr>
//   )}
// </tbody>


// </table>
// </div>
// </div>
//   )
// }

// export default OrderManagement


import React from 'react';

const OrderManagement = () => {
  const orders = [
    {
      _id: 12312321,
      user: { name: "John Doe" },
      totalPrice: 110,
      status: "Processing",
    },
  ];

  const handleStatusChange = (orderId, status) => {
    console.log({ id: orderId, status });
  };

  const handleDeleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      console.log("Deleting", orderId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide animate-fadeIn
                       bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Order Management
        </h2>

        {/* Orders Table */}
        <div className="overflow-x-auto backdrop-blur-xl bg-gray-800/70 shadow-xl 
                        border border-gray-700 rounded-2xl animate-slideUp">
          <table className="min-w-full">
            <thead className="bg-gray-700 text-gray-200 text-sm uppercase">
              <tr>
                <th className="p-4 text-start">Order ID</th>
                <th className="p-4 text-start">Customer</th>
                <th className="p-4 text-start">Total Price</th>
                <th className="p-4 text-start">Status</th>
                <th className="p-4 text-start">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr
                    key={order._id}
                    className="border-b border-gray-700 hover:bg-gray-700/50 transition animate-fadeRow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <td className="p-4 font-semibold">#{order._id}</td>
                    <td className="p-4">{order.user.name}</td>
                    <td className="p-4 font-bold text-gray-200">₹{order.totalPrice}</td>

                    <td className="p-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className="p-2 bg-gray-900 border border-gray-700 rounded-lg"
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    <td className="p-4 flex gap-2">
                      <button
                        onClick={() => handleStatusChange(order._id, "Delivered")}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 
                                   rounded-lg shadow transition transform hover:-translate-y-1"
                      >
                        Mark Delivered
                      </button>
                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 
                                   rounded-lg shadow transition transform hover:-translate-y-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-gray-500">
                    No Orders Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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

export default OrderManagement;
