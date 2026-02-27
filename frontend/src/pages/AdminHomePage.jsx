// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
// import { fetchAdminProducts } from "../redux/slices/adminProductSlice";

// const AdminHomePage = () => {

//   const dispatch = useDispatch ();
//   const {products, loading: productsLoading, error : productsError} = useSelector((state) =>state.adminProducts);
//     const { orders, totalOrders, totalSales, loading: ordersLoading, error: ordersError} = useSelector((state) =>
//     state.adminOrders);
    
//     useEffect(() =>{
//       dispatch(fetchAdminProducts());
//       dispatch(fetchAllOrders());
//     });


//   // -----------------------
//   // PIE CHART DATA (STATIC NOW)
//   // -----------------------
//   const revenueData = [
//     { name: "Today", value: 2500 },
//     { name: "Weekly", value: 15000 },
//     { name: "Monthly", value: 45000 },
//   ];

//   const COLORS = ["#6366F1", "#10B981", "#F59E0B"];

//   return (
//     <div className="min-h-screen p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">

//       {/* Background Floating Animation */}
//       <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-bgMove"></div>

//       <div className="max-w-7xl mx-auto">

//         {/* Page Header */}
//         <h1 className="text-4xl font-extrabold mb-6 animate-fadeIn bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
//           Admin Dashboard
//         </h1>
//         {productsLoading || ordersLoading ? (
//           <p>Loading...</p>
//         ):productsError ?(
//           <p className="text-red-500"> Error fetching products: {productsError}</p>
//         ): ordersError ? (
//          <p className="text-red-500"> Error fetching orders: {ordersError}</p>

//         ): (
//           <>
//         {/* CARDS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {/* Revenue Card */}
//           <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slideUp">
//             <h2 className="text-xl font-semibold">Revenue</h2>
//             <p className="text-3xl font-bold mt-2 text-green-400">₹10,000</p>
//           </div>

//           {/* Orders Card */}
//           <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slideUp delay-150">
//             <h2 className="text-xl font-semibold">Total Orders</h2>
//             <p className="text-3xl font-bold mt-2 text-blue-400">200</p>
//             <Link to="/admin/orders" className="text-blue-300 hover:underline mt-2 inline-block">
//               Manage Orders →
//             </Link>
//           </div>

//           {/* Total Products */}
//           <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slideUp delay-300">
//             <h2 className="text-xl font-semibold">Total Products</h2>
//             <p className="text-3xl font-bold mt-2 text-purple-400">100</p>
//             <Link to="/admin/products" className="text-purple-300 hover:underline mt-2 inline-block">
//               Manage Products →
//             </Link>
//           </div>
//         </div>
        
//         {/* PIE CHART SECTION */}
//         <div className="mt-10 bg-gray-800 p-6 rounded-2xl shadow-xl animate-fadeIn">
//           <h2 className="text-2xl font-bold mb-4">Revenue Overview</h2>

//           <PieChart width={360} height={280}>
//             <Pie
//               data={revenueData}
//               dataKey="value"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               label
//             >
//               {revenueData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </div>
      
//         {/* RECENT ORDERS */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>

//           <div className="overflow-x-auto rounded-xl shadow-xl bg-gray-800">
//             <table className="min-w-full text-left text-gray-300">
//               <thead className="bg-gray-700 text-xs uppercase">
//                 <tr>
//                   <th className="py-3 px-4">Order ID</th>
//                   <th className="py-3 px-4">User</th>
//                   <th className="py-3 px-4">Total Price</th>
//                   <th className="py-3 px-4">Status</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {orders.length > 0 ? (
//                   orders.map((order, index) => (
//                     <tr
//                       key={order._id}
//                       className="border-b border-gray-700 hover:bg-gray-700 transition-all cursor-pointer animate-slideUp"
//                       style={{ animationDelay: `${index * 0.1}s` }}
//                     >
//                       <td className="p-4">{order._id}</td>
//                       <td className="p-4">{order.user.name}</td>
//                       <td className="p-4">₹{order.totalPrice}</td>
//                       <td className="p-4">{order.status}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="p-4 text-center text-gray-500">
//                       No orders found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>

//             </table>
//           </div>
//         </div>
//       </div>
//               )}
//       {/* Custom Animations */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           .animate-fadeIn {
//             animation: fadeIn 0.7s ease-out;
//           }

//           @keyframes slideUp {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           .animate-slideUp {
//             animation: slideUp 0.8s ease-out forwards;
//           }

//           /* Background floating animation */
//           @keyframes bgMove {
//             0% { background-position: 0 0; }
//             100% { background-position: 1000px 1000px; }
//           }

//           .animate-bgMove {
//             animation: bgMove 25s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default AdminHomePage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { fetchAdminProducts } from "../redux/slices/adminProductSlice";
import { fetchAllOrders } from "../redux/slices/adminOrderSlice"; // Make sure this exists

const AdminHomePage = () => {
  const dispatch = useDispatch();

  // const { products, loading: productsLoading, error: productsError } = useSelector(
  //   (state) => state.adminProducts
  // );

  // const { orders , totalOrders, totalSales, loading: ordersLoading, error: ordersError } = useSelector(
  //   (state) => state.adminOrders
  // );
   // Add defaults in case state is undefined
  const { 
    products = [], 
    loading: productsLoading = false, 
    error: productsError = null 
  } = useSelector((state) => state.adminProducts || {});

  const { 
    orders = [], 
    totalOrders = 0, 
    totalSales = 0, 
    loading: ordersLoading = false, 
    error: ordersError = null 
  } = useSelector((state) => state.adminOrders || {});

  useEffect(() => {
    dispatch(fetchAdminProducts());
    dispatch(fetchAllOrders());
  }, [dispatch]);

 // -----------------------
// PIE CHART DATA (DYNAMIC)
// -----------------------

const calculateRevenue = () => {
  const today = new Date();
  const startOfToday = new Date(today.setHours(0, 0, 0, 0));

  const startOfWeek = new Date();
  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  let todayRevenue = 0;
  let weeklyRevenue = 0;
  let monthlyRevenue = 0;

  orders.forEach(order => {
    const orderDate = new Date(order.createdAt);
    const revenue = order.totalPrice || 0;

    if (orderDate >= startOfToday) todayRevenue += revenue;
    if (orderDate >= startOfWeek) weeklyRevenue += revenue;
    if (orderDate >= startOfMonth) monthlyRevenue += revenue;
  });

  return [
    { name: "Today", value: todayRevenue },
    { name: "Weekly", value: weeklyRevenue },
    { name: "Monthly", value: monthlyRevenue },
  ];
};

const revenueData = calculateRevenue();
  const COLORS = ["#6366F1", "#10B981", "#F59E0B"];

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">

      {/* Background Floating Animation */}
      <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-bgMove"></div>

      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <h1 className="text-4xl font-extrabold mb-6 animate-fadeIn bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
          Admin Dashboard
        </h1>

        {productsLoading || ordersLoading ? (
          <p>Loading...</p>
        ) : productsError ? (
          <p className="text-red-500"> Error fetching products: {productsError}</p>
        ) : ordersError ? (
          <p className="text-red-500"> Error fetching orders: {ordersError}</p>
        ) : (
          <>
            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Revenue Card */}
              <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slideUp">
                <h2 className="text-xl font-semibold">Revenue</h2>
                <p className="text-3xl font-bold mt-2 text-green-400">
                  ₹{totalSales.toFixed()}
                </p>
              </div>

              {/* Orders Card */}
              <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slideUp delay-150">
                <h2 className="text-xl font-semibold">Total Orders</h2>
                <p className="text-3xl font-bold mt-2 text-blue-400">
                  {totalOrders }
                </p>
                <Link to="/admin/orders" className="text-blue-300 hover:underline mt-2 inline-block">
                  Manage Orders →
                </Link>
              </div>

              {/* Total Products */}
              <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slideUp delay-300">
                <h2 className="text-xl font-semibold">Total Products</h2>
                <p className="text-3xl font-bold mt-2 text-purple-400">
                  {products?.length || 100}
                </p>
                <Link to="/admin/products" className="text-purple-300 hover:underline mt-2 inline-block">
                  Manage Products →
                </Link>
              </div>
            </div>

            {/* PIE CHART SECTION */}
            <div className="mt-10 bg-gray-800 p-6 rounded-2xl shadow-xl animate-fadeIn">
              <h2 className="text-2xl font-bold mb-4">Revenue Overview</h2>

              <PieChart width={360} height={280}>
                <Pie
                  data={revenueData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {revenueData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>

            {/* RECENT ORDERS */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>

              <div className="overflow-x-auto rounded-xl shadow-xl bg-gray-800">
                <table className="min-w-full text-left text-gray-300">
                  <thead className="bg-gray-700 text-xs uppercase">
                    <tr>
                      <th className="py-3 px-4">Order ID</th>
                      <th className="py-3 px-4">User</th>
                      <th className="py-3 px-4">Total Price</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.length > 0 ? (
                      orders.map((order, index) => (
                        <tr
                          key={order._id}
                          className="border-b border-gray-700 hover:bg-gray-700 transition-all cursor-pointer animate-slideUp"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <td className="p-4">{order._id}</td>
                          <td className="p-4">{order.user?.name || "Guest"}</td>
                          <td className="p-4">₹{Number(order.totalPrice || 0).toFixed(2)}</td>
                          <td className="p-4">{order.status}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="p-4 text-center text-gray-500">
                          No orders found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.7s ease-out; }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }

          @keyframes bgMove {
            0% { background-position: 0 0; }
            100% { background-position: 1000px 1000px; }
          }
          .animate-bgMove { animation: bgMove 25s linear infinite; }
        `}
      </style>
    </div>
  );
};

export default AdminHomePage;
