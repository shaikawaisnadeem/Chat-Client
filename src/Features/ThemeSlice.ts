import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';

interface InitialValue {
  value: string;
}

const initialState: InitialValue = {
  value: localStorage.getItem('theme') || 'light'
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem('theme', state.value);
    }
  }
});

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
