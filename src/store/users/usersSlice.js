import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: [],
  isLoading: true,
  erro: undefined,
}
const userSlice = createSlice({
 name: 'users',
 initialState,
 reducers: { 
  
  addUsers: (state, action) => {
  state.users = state.users.push(action.payload);
 }

 removeUsers: (state, action) => {
  state.users = state.users.filter(user => user.id !== action.payload.id)
 }
 } 
})






 export const {addBook, removeBook} = userSlice.actions;
export default userSlice.reducer;