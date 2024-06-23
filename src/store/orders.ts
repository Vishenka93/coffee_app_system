import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Order } from "../types";

const local = localStorage.getItem("confirmedOrders");
const orders: Order[] = local === null ? [] : (JSON.parse(local) as Order[]);

const initialState = orders;

const confirmedOrders = createSlice({
    name: "orders",
    initialState,
    reducers: {
        confirmOrder(state, action: PayloadAction<Order>) {
            // const newOrder = {
            //     orderItems: state.list,
            //     date: Date.now(),
            // };
            state.push(action.payload)
            localStorage.setItem(
                "confirmedOrders",
                JSON.stringify(state)
            );

            // const currentOrders = JSON.parse(
            //     localStorage.getItem("confirmedOrders") || "[]"
            // );
            // currentOrders.push(newOrder);

            // localStorage.setItem(
            //     "confirmedOrders",
            //     JSON.stringify(currentOrders)
            // );

            // state.list = [];
        },
    },
});

export const { confirmOrder } = confirmedOrders.actions;

export default confirmedOrders.reducer;
