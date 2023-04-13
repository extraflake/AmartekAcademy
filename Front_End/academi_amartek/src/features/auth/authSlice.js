import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    loading: false,
    userToken: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login:(state, action) =>{
            state.isAuthenticated = true;
            state.userToken = action.payload;
        },
        logout:(state)=>{
            state.isAuthenticated = false;
            state.user=null;
        }
    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;