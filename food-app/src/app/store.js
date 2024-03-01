import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/UserSlice";
import OrdersReducer from "./features/OrdersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};
const persistedUserReducer = persistReducer(persistConfig, UserReducer);
const presistedOrdersReducer = persistReducer(persistConfig, OrdersReducer);
export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    orders: presistedOrdersReducer,
  },
});
export const persistor = persistStore(store);
