// import React from "react";
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// const PayPalButton = ({ amount, onSuccess, onError }) => {
//   return (
//     <PayPalScriptProvider
//       options={{
//         "client-id":
//           "Ab9G-VWUxxlz9rjCjp1j7hL5CNwJcxE0-uAXsNbGNYgschOHVU6dVjjREFMXEzdVfRrCXjg25Jubm2oe",
//       }}
//     >
//       <PayPalButtons
//         style={{ layout: "vertical" }}
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: amount,
//                 },
//               },
//             ],
//           });
//         }}
//         onApprove={(data, actions) => {
//           return actions.order.capture().then(onSuccess);
//         }}
//         onError={onError}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalButton;



// src/components/GooglePayButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";


const GPayButton = ({ totalPrice, handlePaymentSuccess }) => {
  const navigate = useNavigate(); // hook for redirect


  return (
    <div className="flex justify-center mt-6">
    <GooglePayButton
  environment="TEST"
  buttonColor="black"
  buttonType="buy"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["VISA", "MASTERCARD"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: import.meta.env.VITE_GATEWAY_NAME,
            gatewayMerchantId: import.meta.env.VITE_GATEWAY_MERCHANT_ID,
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: import.meta.env.VITE_MERCHANT_ID,
      merchantName: import.meta.env.VITE_MERCHANT_NAME,
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: totalPrice.toString(),
      currencyCode: "INR",
      countryCode: "IN",
    },
  }}
  onLoadPaymentData={(paymentData) => {
    // console.log("✅ Payment successful", paymentRequest);
    // alert("Payment Successful!");
    // navigate("/order-confirmation");

    handlePaymentSuccess(paymentData)
  }}
  onError={(err) => console.error("❌ Payment Failed", err)}
/>


    </div>
  );
};

export default GPayButton;
