import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// importing store which access local window storage
import userReducer from "./user/user.reducer.js";
import cartReducer from "./cart/cart.reducer.js";

import shopReducer from "./shop/shop.reducer.js";
import directoryReducer from "./directory/directory.reducer.js";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
