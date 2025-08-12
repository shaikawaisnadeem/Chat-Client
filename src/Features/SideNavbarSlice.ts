import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialValueType {
    value: string
}

const initialState:initialValueType={
    value: '/'
}

const SideNavbarSlice = createSlice({
    name: 'sidenavbar',
    initialState,
    reducers: {
        setValue: (state,action:PayloadAction<string>)=>{
            state.value = action.payload
        }
    }
})  

export const {setValue} = SideNavbarSlice.actions;
export default SideNavbarSlice.reducer; 