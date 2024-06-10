import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        loggedIn: false,
        access_token: null,
        refresh_token:null,
        username:null,
        role:null,
        Institution:null,

    }
}
//define the requcers here 
export const authUsersSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        login: (state, action) => {
            //if logged in, then update the status  plus the  payload
            state.user.loggedIn = true;
            state.user.access_token = action.payload.tokens.access_token;
            state.user.refresh_token = action.payload.tokens.refresh_token;
            state.user.username = action.payload.username;
            state.user.role = action.payload.role
        },
        logout: (state) => {
            //reset the initial state
            console.log('logged out')
        },
        refresh: (state) => {
            //reset the tokens using api calls
            console.log('refresh token')
        }
    }
})
//export the action creators

export const { login, logout, refresh } = authUsersSlice.actions
//export the initial state items to access them over in any component using a react hook
export const selectUser = state => state.authReducer.user
export default authUsersSlice.reducer