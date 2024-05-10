import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";



const local = localStorage.getItem("confirmedOrders");
const orders:  = local === null ? [] : JSON.parse(local);

const initialState = {};

const demoTheme = createSlice({
    name: "orders",
    initialState,
    reducers: {},
});

export const { changeTheme } = demoTheme.actions;

// export default demoTheme.reducer;
