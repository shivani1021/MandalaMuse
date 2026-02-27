
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GPayButton from "./GooglePayButton";
import { useDispatch, useSelector } from "react-redux";
import { createCheckout } from "../../redux/slices/checkoutSlice";
import { clearCart, fetchCart } from "../../redux/slices/cartSlice";

import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart, loading, error} = useSelector((state) => state.cart);
  const {user} = useSelector((state) => state.auth);
  
  
  const [checkOutId, setCheckOutId] = useState(null);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "", lastName: "", address: "", city: "", state: "", postalCode: "", country: "", phone: "", email: "",
  });

  // Ensure cart is loaded 
  useEffect(() =>{
    if (!cart || !cart.products || cart.products.length === 0){
      navigate("/");
    }
  },[cart, navigate]);

  useEffect(() => {
  if (user?.email) {
    setShippingAddress(prev => ({ ...prev, email: user.email }));
  }
}, [user]);

  const handleCreateCheckout = async (e) => {
    e.preventDefault();
    if (cart && cart.products.length>0){

       const formattedShipping = {
  address: shippingAddress.address,
  city: shippingAddress.city,
  postalCode: shippingAddress.postalCode,
  country: shippingAddress.country,
};

console.log("Formatted shipping:", formattedShipping);

console.log("Checkout Payload:", {
  checkoutItems: cart.products,
  shippingAddress: formattedShipping,
  paymentMethod: "Google Pay",
  totalPrice: cart.totalPrice,
});

      const res = await dispatch(
     
        createCheckout({
          checkoutItems: cart.products,
          shippingAddress: formattedShipping,
          paymentMethod:  "Google Pay",
          totalPrice:cart.totalPrice,

        })
      );
      if(res.payload && res.payload._id )
        setCheckOutId(res.payload._id); // set checkout ID if checkout was successful
    }
  };

  
 


  const handlePaymentSuccess = async (details) => {
  try {
    // 1️⃣ Mark checkout as paid
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkOutId}/pay`,
      { paymentStatus: "paid", paymentDetails: details },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );

    if (response.status === 200) {
      const finalizeRes = await handleFinalizeCheckout(checkOutId);
      if (!finalizeRes || !finalizeRes.orderId) {
        console.error("Failed to finalize checkout");
        return; // prevent navigation if orderId is missing
      }

   // ✅ Clear Redux cart + localStorage
      dispatch(clearCart());
       dispatch(fetchCart({ userId: finalizeRes.user }));

      // 3️⃣ Navigate to Order Confirmation page
      navigate(`/order-confirmation/${finalizeRes.orderId}`);
    }
  } catch (error) {
    console.error("Payment Error:", error);
  }
};


  const handleFinalizeCheckout = async (checkOutId) =>{
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_BACKEND_URL 
        }/api/checkout/${checkOutId}/finalize`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          }
        }
      );
         return response.data;
      
    }catch(error) {
      console.error("Finalize Checkout Error:", error);
    return null; // return null if failed
    }
  };

  if (loading) return <p>Loading cart ...</p>;
  if (error) return <p>Error: {error}</p>;
  if(!cart || !cart.products || cart.products.length === 0){
    return <p>Your cart is empty</p>
  }

  const handlePaymentError = (error) => {
    alert("❌ Payment Failed. Please try again.");
    console.error(error);
  };

  return (
    <div className="min-h-screen bg-[rgb(160_82_45/_0.05)] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Section: Checkout Form */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-6 backdrop-blur-md transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center lg:text-left animate-fadeInUp">Checkout</h2>

          <form onSubmit={handleCreateCheckout} className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-700">Contact Details</h3>
            <input
              type="email"
              placeholder="Email Address"
              value={shippingAddress.email}
              onChange={(e) => setShippingAddress({ ...shippingAddress, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 transition"
              required
            />

            <h3 className="text-xl font-semibold text-gray-700 mt-4">Delivery Address</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" value={shippingAddress.firstName}
                onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-amber-200 transition" required />
              <input type="text" placeholder="Last Name" value={shippingAddress.lastName}
                onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-amber-200 transition" required />
            </div>

            <input type="text" placeholder="Address" value={shippingAddress.address}
              onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-amber-200 transition" required />

            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="City" value={shippingAddress.city}
                onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-amber-200 transition" required />
              <input type="text" placeholder="Postal Code" value={shippingAddress.postalCode}
                onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-amber-200 transition" required />
            </div>

            <input type="text" placeholder="Country" value={shippingAddress.country}
              onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-amber-200 transition" required />
            <input type="tel" placeholder="Phone Number" value={shippingAddress.phone}
              onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-amber-200 transition" required />

            {!checkOutId ? (
              <button
                type="submit"
                onClick={(e) => {
                  // e.preventDefault();
                  const requiredFields = ["firstName","lastName","address","city","postalCode","country","phone","email"];
                  const emptyField = requiredFields.find(field => !shippingAddress[field].trim());
                  if (emptyField) { alert("⚠️ Fill all required details.");
                  }
                }}
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow hover:shadow-lg animate-bounce"
              >
                Continue to Payment
              </button>
            ) : (
              <div className="mt-6 bg-white rounded-xl p-6 shadow-lg border border-gray-200 animate-fadeIn">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Google Pay</h3>
                <GPayButton totalPrice={cart.totalPrice.toFixed(2)} 
                  handlePaymentSuccess={handlePaymentSuccess}/>
              </div>
            )}
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-6 backdrop-blur-md transition-all duration-500 hover:shadow-2xl animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4 hover:scale-105 transform transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <img src={product.image} alt={product.name} className="w-20 h-24 object-cover rounded-lg" />
                  <div>
                    <h4 className="text-md font-medium text-gray-800">{product.name}</h4>
                    <p className="text-gray-500 text-sm">Size: {product.size || "M"}</p>
                    <p className="text-gray-500 text-sm">Color: {product.color || "Red"}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-800">₹{product.price?.toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-lg mt-4">
            <div className="flex justify-between items-center"><p>Subtotal</p><p> ₹{cart.totalPrice?.toLocaleString()}</p></div>
            <div className="flex justify-between items-center"><p>Shipping</p><p>Free</p></div>
            <div className="flex justify-between items-center font-semibold border-t pt-3"><p>Total</p><p>₹{cart.totalPrice?.toLocaleString()}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
