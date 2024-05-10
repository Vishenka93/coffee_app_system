import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderItem } from "../types";

type changeQuantityAction = {
    name: string;
    amount: number;
};

type AddItem = {
    list: OrderItem[];
};
const local = localStorage.getItem("orders");
const order = local === null ? [] : JSON.parse(local);

const initialState: AddItem = {
    list: order,
};

const addItemOrderSlice = createSlice({
    name: "addItemOrder",
    initialState,
    reducers: {
        addItemOrder(state, action: PayloadAction<OrderItem>) {
            const { name } = action.payload;
            const existingItemIndex = state.list.findIndex(
                (el) => el.name === name
            );
            if (existingItemIndex !== -1) {
                state.list[existingItemIndex].quantity++;
            } else {
                state.list.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            localStorage.setItem("order", JSON.stringify(state.list));
        },
        changeQuantity(state, action: PayloadAction<changeQuantityAction>) {
            const { name, amount } = action.payload;
            state.list = state.list
                .map((item) =>
                    item.name === name
                        ? {
                              ...item,
                              quantity: item.quantity + amount,
                          }
                        : item
                )
                .filter(({ quantity }) => quantity !== 0);
        },
        clearOrder(state) {
            state.list = [];
        },
        confirmOrder(state) {
            const newOrder = {
                orderItems: state.list,
                date: Date.now(),
            };

            const currentOrders = JSON.parse(
                localStorage.getItem("confirmedOrders") || "[]"
            );
            currentOrders.push(newOrder);

            localStorage.setItem(
                "confirmedOrders",
                JSON.stringify(currentOrders)
            );

            state.list = [];
        },
    },
});

export const { addItemOrder, changeQuantity, clearOrder, confirmOrder } =
    addItemOrderSlice.actions;

export default addItemOrderSlice.reducer;
