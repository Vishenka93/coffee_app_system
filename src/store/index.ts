import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addItemOrder from "./addItemOrderSlice";
import demoTheme from "./demoSclice";

const rootReduser = combineReducers({
    addItem: addItemOrder,
    demoTheme: demoTheme,
});

export const store = configureStore({
    reducer: rootReduser,
});

export type RootState = ReturnType<typeof store.getState>;
