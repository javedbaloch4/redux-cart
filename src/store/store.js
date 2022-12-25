import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import productSlice from "./productSlice"
import userSlice from "./userSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
    product: productSlice,
  },
})

export default store
