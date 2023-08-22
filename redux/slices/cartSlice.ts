import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    items: Array<any>;
    totalAmount: number;
    totalQuantity: number;
}

const initialState: CounterState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: "cart", // a unique name for the reducer
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ product: any, quantity: number }>) => {
            state.totalQuantity += action.payload.quantity;
            console.log(action.payload.quantity)
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            state.totalQuantity -= action.payload.totalQuantity;
        },
        clearCart: (state) => {
            state = initialState;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;