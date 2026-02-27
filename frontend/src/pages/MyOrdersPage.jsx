// import { useEffect, useState } from 'react'

// const MyOrdersPage = () => {
//   const [orders, setOrders] = useState([]);   
//   useEffect(() => {
//     //simulate fetching orders 
//     setTimeout(() => {
//       const mockOrders = [
//        {
//           id: 'ORD123456',
//           createdAt: new Date(),
//           shippingAddress: {
//             line1: "123 Main St",
//             city: "New York",
//             state: "NY",
//             country: "USA",
//             postal_code: "10001"
//           },
//           orderItems: [
//             {
//               name: 'Product 1',
//               image: "https://picsum.photos/100/100?random=1"
//             },
//             {
//               name: 'Product 2',
//               image: "https://picsum.photos/100/100?random=2"
//             }
//           ],
//           totalAmount: 100.0,
//           isPaid: true,
//         },
//         {
//           id: 'ORD093456',
//           createdAt: new Date(),
//           shippingAddress: {
//             line1: "123 Main St",
//             city: "New York",
//             state: "NY",
//             country: "USA",
//             postal_code: "10001"
//           },
//           orderItems: [
//             {
//               name: 'Product 1',
//               image: "https://picsum.photos/100/100?random=2"
//             },
//             {
//               name: 'Product 2',
//               image: "https://picsum.photos/100/100?random=2"
//             }
//           ],
//           totalAmount: 100.0,
//           isPaid: true,
//         }
//       ];
//       setOrders(mockOrders); // set state correctly
//     }, 1000); // simulate network delay
//   }, []);
//   return (<div className="max-w-7xl mx-auto p-4 sm:p-6">
//     <h2 className="text-2xl font-bold mb-6">My Orders</h2>
//     <div className="relative shadow-md sm:rounded-lg overflow-hidden">
//       <table className='min-w-full text-left text-gray-500'>
//         <thead className='bg-gray-100 text-xs text-gray-700 uppercase'>
//           <tr>
//             <th  className='px-4 py-2 sm:py-3'>Image</th>
//             <th  className='px-4 py-2 sm:py-3'>Order ID</th>
//             <th  className='px-4 py-2 sm:py-3'>Created</th>
//             <th  className='px-4 py-2 sm:py-3'>Shipping Address</th>
//             <th  className='px-4 py-2 sm:py-3'>Items</th>
//             <th  className='px-4 py-2 sm:py-3'>Price</th>
//             <th  className='px-4 py-2 sm:py-3'>Status</th>
//             </tr>
//             </thead>

//             <tbody>
//               {orders.length>0?(
//                 orders.map((order) =>(
//                   <tr key={order.id} className="border-b hover:bg-gray-50 cursor-pointer">
//                     <td className='px-4 py-2 sm:py-4 sm:px-4'>
//                       <img src={order.orderItems[0].image} alt={order.orderItems[0].name} 
//                       className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"/>
//                     </td>
//                     <td className='px-4 py-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>{order.id}</td>
//                     <td className='px-4 py-2 sm:py-4 sm:px-4'>{new Date(order.createdAt).toLocaleDateString()}
//                       {new Date(order.createdAt).toLocaleTimeString()}

//                     </td>
//                     <td className='px-4 py-2 sm:py-4 sm:px-4'>
//                       {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : "N/A"}
//                     </td>
//                     <td className='px-4 py-2 sm:py-4 sm:px-4'>
//                       {order.orderItems.length}
//                     </td>

//                     <td className='px-4 py-2 sm:py-4 sm:px-4'>
//                       ₹{order.totalAmount}
//                     </td>
//                     <td className='px-4 py-2 sm:py-4 sm:px-4'>
//                       <span
//                       className={`${
//                         order.isPaid
//                           ? 'bg-green-100 text-green-800 '
//                           : 'bg-red-100 text-red-800 '
//                       }px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
//                       > {order.isPaid ? "Paid": "Pending"}</span>
//                     </td>

//                     </tr>
//                 ))
//               ):(
//                 <tr>
//                   <td colSpan="7" className=" px-4 text-center text-gray-500 py-4">
//                     No orders found.
//                   </td>
//                 </tr>
//               )}
              
//             </tbody>
//       </table>
//     </div>
// </div>

//   )

// }


// export default MyOrdersPage


import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserOrders } from '../redux/slices/orderSlice';

const MyOrdersPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, loading,error} = useSelector((state)=> state.orders);

  useEffect(()=>{
    dispatch(fetchUserOrders());
  },[dispatch]);



  const handlerowClick =(orderId) =>{
    navigate(`/order/${orderId}`)
  };

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="min-h-screen  bg-[rgb(160_82_45/_0.1)] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left">
          My Orders
        </h2>

        {/* Desktop Table View */}
        <div className="hidden md:block relative shadow-lg sm:rounded-xl overflow-hidden bg-white/80 backdrop-blur-md border border-gray-200">
          <table className="min-w-full text-left text-gray-600">
            <thead className="bg-amber-100 text-xs text-gray-700 uppercase">
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Created</th>
                <th className="px-4 py-2">Shipping Address</th>
                <th className="px-4 py-2">Items</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id} 
                  onClick={()=> handlerowClick(order._id)}
                  className="border-b hover:bg-gray-50 cursor-pointer transition-colors">
                    <td className="px-4 py-2">
                      <img
                        src={order.orderItems[0].image}
                        alt={order.orderItems[0].name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900">#{order._id}</td>
                    <td className="px-4 py-2">
                      {new Date(order.createdAt).toLocaleDateString()}{" "}
                      {new Date(order.createdAt).toLocaleTimeString()}
                    </td>
                    <td className="px-4 py-2">
                      {order.shippingAddress
                        ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                        : "N/A"}
                    </td>
                    <td className="px-4 py-2">{order.orderItems.length}</td>
                    <td className="px-4 py-2">₹{Number(order.totalPrice || 0).toFixed(2)}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`${
                          order.isPaid
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        } px-2 py-1 rounded-full text-xs font-medium`}
                      >
                        {order.isPaid ? "Paid" : "Pending"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div
                key={order._id}
                onClick={() => handlerowClick(order._id)}
                className="border rounded-xl p-4 shadow-lg bg-white/80 backdrop-blur-md transition hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">#{order._id}</h3>
                  <span
                    className={`${
                      order.isPaid
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    } px-2 py-1 rounded-full text-xs font-medium`}
                  >
                    {order.isPaid ? "Paid" : "Pending"}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <img
                    src={order.orderItems[0].image}
                    alt={order.orderItems[0].name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <p className="text-gray-600 text-sm">
                      Items: {order.orderItems.length}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Total: ₹{Number(order?.price ?? 0).toFixed(2)}

                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Shipping: {order.shippingAddress.city}, {order.shippingAddress.country}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {new Date(order.createdAt).toLocaleDateString()}{" "}
                  {new Date(order.createdAt).toLocaleTimeString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
