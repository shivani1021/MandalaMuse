
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`
// const ADMIN_TOKEN = `Bearer ${localStorage.getItem("adminToken")}`;

// async thunk to fetch admin.products
export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async () => {
     const token = localStorage.getItem("adminToken");
      const response = await axios.get(
        `${API_URL}/api/admin/products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // should be an array of orders
    } 
);

// async function  to create a new Products 
export const createProduct  = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData) => {
         const token = localStorage.getItem("adminToken");
      const response = await axios.post(
        `${API_URL}/api/admin/products`,
      productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    }
);

 // async Thunk to update an existing product
export const updateProduct= createAsyncThunk(
  "adminProducts/updateProduct",
  async ({id, productData}) => {
         const token = localStorage.getItem("adminToken");

    const response =
      await axios.put(
        `${API_URL}/api/admin/products/${id}`, productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    }
);


 // async Thunk to delete product
export const deleteProducts = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (id) => {
         const token = localStorage.getItem("adminToken");

      await axios.delete(
        `${API_URL}/api/admin/products/${id}`, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return id;
    }
);

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState: {
   products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all orders
      .addCase(fetchAdminProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        
      })
      .addCase(fetchAdminProducts.rejected, (state, action) => {
        state.loading = false;
        state.error =  action.error.message;
      })



      // Create product
      .addCase(createProduct.fulfilled,(state,action) =>{
        state.products.push(action.payload);
      })
      // Update product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== -1) state.products[index] = action.payload;
      })

      // Delete product
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
       
      });
  },
});

export default adminProductSlice.reducer;

