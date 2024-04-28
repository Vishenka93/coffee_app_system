import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

interface Theme {
    theme: "light" | "dark";
}

const initialState: Theme = {
    theme: "light",
};

const demoTheme = createSlice({
    name: "demoTheme",
    initialState,
    reducers: {
        changeTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export const { changeTheme } = demoTheme.actions;

export default demoTheme.reducer;
