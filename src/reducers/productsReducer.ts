import { deleteProductByID, getCurrentProduct } from "@/helpers/functions";
import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  products: Product[];
  cartCount: number;
};

const initialState: initialState = {
  products: [],
  cartCount: 0,
};

export const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    deleteFromCart: (state, action) => {
      state.products = deleteProductByID(state.products, action.payload);
    },
    inreaseCount: (state, action) => {
      state.cartCount++;
      const currentProd = getCurrentProduct(state.products, action.payload);

      if (currentProd) {
        currentProd.productCount = currentProd.productCount
          ? currentProd.productCount + 1
          : 1;

        currentProd.totalProductPrice =
          currentProd.productCount * currentProd.price;
      }
    },
    decreaseCount: (state, action) => {
      const currentProd = getCurrentProduct(state.products, action.payload);

      if (state.cartCount > 0) {
        state.cartCount--;

        if (currentProd) {
          currentProd.productCount = currentProd.productCount
            ? currentProd.productCount - 1
            : 1;

          currentProd.totalProductPrice =
            currentProd.productCount * currentProd.price;

          if (currentProd.productCount < 1) {
            state.products = deleteProductByID(state.products, action.payload);
          }
        }
      }
    },
    deleteProduct: (state, action) => {
      const currentProd = getCurrentProduct(state.products, action.payload);

      if (currentProd) {
        state.cartCount = state.cartCount - currentProd.productCount;
        currentProd.productCount = 0;
      }
      state.products = deleteProductByID(state.products, action.payload);
    },
  },
});

export default productsReducer.reducer;
export const { actions } = productsReducer;
