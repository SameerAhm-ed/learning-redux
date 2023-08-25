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
            const newItem = action.payload.product;
            const existingItem = state.items.find((item) => item._id===newItem._id); 
            state.totalQuantity += action.payload.quantity;
            state.totalAmount += action.payload.product.price;
            
            if (!existingItem) {
                const totalPrice = newItem.price * action.payload.quantity;
                state.items.push({
                    ...newItem,
                    quantity: action.payload.quantity,
                    totalPrice,
                });
            } else {
                const totalPrice = existingItem.price * action.payload.quantity;
                existingItem.quantity += action.payload.quantity;
                existingItem.totalPrice = totalPrice;
            }

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