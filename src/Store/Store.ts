import { configureStore } from "@reduxjs/toolkit";
import sidenavbarReducer from "../Features/SideNavbarSlice";

export const Store = configureStore({
    reducer: {
        sidenavbar: sidenavbarReducer,
    }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
