import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  current_order: [],
  pervious_orders: [],
};
const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    //add item to current order array
    add_order: (state, action) => {
      state.current_order.push(action.payload);
    },
    //remove item from current order array
    remove_order: (state, action) => {
      state.current_order = state.current_order.filter(
        (e) => e.id !== action.payload
      );
    },
    clear_order: (state) => {
      state.current_order = [];
    },
    add_previous_order: (state, action) => {
      state.pervious_orders.push(action.payload);
    },
  },
});
export default OrdersSlice.reducer;
export const { add_order, remove_order, clear_order, add_previous_order } =
  OrdersSlice.actions;
