import { createSlice } from "@reduxjs/toolkit"

// Object free is read only can't change it
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
})

const getCartDataFromLocalStorage = () => {
  let data = localStorage.getItem("cart")
  console.log("Data => ", data)
  if (data === undefined) return []
  else return JSON.parse(data)
}

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartDataFromLocalStorage(),
  reducers: {
    // Pure function must not have side effect, don't use async here.
    // Reducers are pure function that's doesn't change the outside scope
    add(state, action) {
      let index = state.findIndex((e) => e.id === action.payload.id)
      console.log("Index => ", index)
      if (index === -1) state.push(action.payload)
      else state[index].qty += 1
      localStorage.setItem("cart", JSON.stringify(state))
      state.status = STATUSES.LOADING
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload)
    },
  },
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer
