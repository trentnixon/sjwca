import { createSlice } from '@reduxjs/toolkit'

export const UXSTATE = createSlice({
  name: 'UXSTATE',
  initialState: {
    isFormUpdating: false
  },
  reducers: {
    isFormUpdating: (state, action) => {
      state.isFormUpdating = action.payload
    }
  }
})

export const { isFormUpdating } = UXSTATE.actions
export default UXSTATE.reducer