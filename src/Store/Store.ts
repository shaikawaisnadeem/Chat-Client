import { configureStore } from "@reduxjs/toolkit";
import sidenavbarReducer from "../Features/SideNavbarSlice";
import ActiveStatusReducers from '../Features/ActiveSlice';
import ThemeSliceReducers from '../Features/ThemeSlice'

export const Store = configureStore({
    reducer: {
        sidenavbar: sidenavbarReducer,
        activestatus:ActiveStatusReducers,
        theme: ThemeSliceReducers
    }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
