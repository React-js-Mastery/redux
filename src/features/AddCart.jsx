import { createSlice } from "@reduxjs/toolkit";

const AddCart = createSlice({
    name: 'Cart',
    initialState: {
        cart: [],
    },
    reducers: {
        AddCarts: (state, action) => {
            state.cart.push(action.payload);
        },
        RemoveItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        }

    }
})

export default AddCart.reducer;
export const { AddCarts, RemoveItem } = AddCart.actions