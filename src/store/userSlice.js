import { createSlice } from "@reduxjs/toolkit"

const STATUSES = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    getUsers(state, action) {
      state.data.push(action.payload)
      state.status = STATUSES.LOADING
    },
  },
})

export const { getUsers } = userSlice.actions
export default userSlice.reducer
