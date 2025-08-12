import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialValue {
  value: string;
}

const initialState: InitialValue = {
  value: localStorage.getItem('activeStatus') || 'active',
};

const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem('activeStatus', action.payload);
    },
  },
});

export const { setActive } = activeSlice.actions;
export default activeSlice.reducer;
