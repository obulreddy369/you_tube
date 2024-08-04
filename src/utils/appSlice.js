import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
       name:"app",
       initialState:{
        isMenuOpen:true,
        // isSuggestions:false
       },
       reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    //     isSuggestionsOpen:(state)=>{
    //     state.isSuggestions=!state.isSuggestions;
    //    }
    }
});

export const {toggleMenu,closeMenu} =appSlice.actions
export default appSlice.reducer;