import { createSlice } from "@reduxjs/toolkit";

export const webSlice = createSlice({
        name : "web",
        initialState : {
            userData:{
                name : "",
                email : "",
                password:"",
                message:""
        
            },
    
    
            loading : null,
            error : false,
    
        },
        reducers:{
        startUser: (state) => {
            state.loading = true;
        },
        successUser: (state , action) => {
         state.userData = action.payload;
         state.loading = false
        },
        errorUser: (state) => {
            state.loading = false;
            state.error = true
        }
        }
    
        
    })
    
    export const {startUser,successUser,errorUser} = webSlice.actions
    
    export default webSlice.reducer