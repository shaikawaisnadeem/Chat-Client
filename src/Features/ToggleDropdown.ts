import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialValue {
    value: boolean
}

const initialState: initialValue ={
    value: false
}

const DropDown = createSlice({
    name: 'dropdown',
    initialState,
    reducers:{
        setDropDown: (state,action: PayloadAction<boolean>)=>{
            state.value = action.payload
        }
    }
})

export const {setDropDown} = DropDown.actions;
export default DropDown.reducer 