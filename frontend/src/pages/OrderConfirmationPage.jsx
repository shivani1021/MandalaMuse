
import React, { useEffect } from 'react';
import Checkout from '../component/Cart/Checkout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate , useParams} from 'react-router-dom';
import { clearCart } from '../redux/slices/cartSlice';

const OrderConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {checkout} = useSelector((state) => state.checkout)

  // clear the cart when the order is confirm
  useEffect(()=>{
    if (checkout && checkout._id){
      dispatch(clearCart());
      localStorage.removeItem("cart");
    }else{
      navigate("/my-orders");
    }
  },[checkout, dispatch])

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 7); // Add 7 days
    return orderDate.toLocaleDateString();
  }

  return (
    <div className="min-h-screen bg-[rgb(160_82_45/_0.1)] py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl animate-fadeInUp">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-10 animate-bounce">
          Thank you for your order!
        </h1>

        {checkout && (
          <div className="space-y-10">
            {/* Order Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 p-4 bg-white/80 rounded-xl shadow-lg transition hover:shadow-2xl animate-fadeInUp">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Order ID: {checkout._id}</h2>
                <p className="text-gray-600 mt-1">Order Date: {new Date(checkout.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-emerald-700 font-medium">
                  Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}
                </p>
              </div>
            </div>

            {/* Checkout Items */}
            <div className="space-y-6">
              {checkout.checkoutItems.map(item => (
                <div key={item.productId} className="flex items-center justify-between p-4 bg-white/80 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate-fadeInUp">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-lg mr-4" />
                  <div className="flex-1">
                    <h4 className="text-md font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.size} | {item.color}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-md font-semibold text-gray-800">₹{item.price}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment & Delivery Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-white/80 rounded-xl shadow-md animate-fadeInUp">
              <div>
                <h4 className="text-lg font-semibold mb-2">Payment</h4>
                <p className="text-gray-600">{checkout.paymentMethod}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Delivery Address</h4>
                <p className="text-gray-600">{checkout.shippingAddress.address}</p>
                <p className="text-gray-600">{checkout.shippingAddress.city}, {checkout.shippingAddress.country}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
