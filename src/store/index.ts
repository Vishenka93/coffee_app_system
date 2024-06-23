import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addItemOrder from "./addItemOrderSlice";
import demoTheme from "./demoSclice";
import confirmedOrders from "./orders";

const rootReduser = combineReducers({
    addItem: addItemOrder,
    demoTheme: demoTheme,
    confirmedOrders: confirmedOrders,
});

export const store = configureStore({
    reducer: rootReduser,
});

export type RootState = ReturnType<typeof store.getState>;
