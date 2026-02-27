// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async thunk to create a checkout session
// export const createCheckout = createAsyncThunk(
// "checkout/createCheckout",
// async (checkoutdata, { rejectWithValue }) => {
// try{
// const response = await axios.post(
// `${import.meta.env.VITE_BACKEND_URL}/api/checkout`,
// checkoutdata,
// {
// headers: {
// Authorization: `Bearer ${localStorage.getItem(userToken)}`,
// },
// }
// );
// return response.data;
// }catch (error) {
//     return rejectWithValue(error.response.data);
// }
// }
// );

// const checkoutSlice = createSlice({
// name: "checkout",
// initialState: {
// checkout: null,
// loading: false,
// error: null,
// },
// reducers: {},
// extraReducers: (builder) =>{
//     builder
//     .addCase(createCheckout.pending, (state) =>{
//         state.loading = true;
//         state.error = null;
//     })

//      .addCase(createCheckout.fulfilled, (state, action) =>{
//         state.loading = false;
//         state.checkout = action.payload;
//     })

//      .addCase(createCheckout.rejected, (state,action) =>{
//         state.loading = false;
//         state.error = action.payload.message;
//     });


// }
// });

// export default checkoutSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create checkout session
export const createCheckout = createAsyncThunk(
  "checkout/createCheckout",
  async (checkoutData, { rejectWithValue ,getState }) => {
    try {
       // 1️⃣ Get user from auth slice
      const { user } = getState().auth; 
      // OR userInfo (whatever your auth slice uses)
      // console.log("USER:", user);

      // 2️⃣ Merge user ID into payload
      const payload = {
        ...checkoutData,
        user: user?._id, // <--- REQUIRED by backend schema
      };


        // 🔥 Add this log here
      console.log("CHECKOUT ITEMS:", payload.checkoutItems);
       console.log("FINAL CHECKOUT PAYLOAD:", payload);


      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkout`,
        // checkoutData, 
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;

    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Checkout failed"
      );
    }
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkout: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCheckout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createCheckout.fulfilled, (state, action) => {
        state.loading = false;
        state.checkout = action.payload;
      })

      .addCase(createCheckout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // safe
      });
  },
});

export default checkoutSlice.reducer;


