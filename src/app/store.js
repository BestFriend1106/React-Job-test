import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import collectionReducer from "../features/collection/collectionSlice";
import categoryReducer from "../features/category/categorySlice";
import itemReducer from "../features/item/itemSlice";
import tagReducer from "../features/tag/tagSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  counter: counterReducer,
  collection: collectionReducer,
  category: categoryReducer,
  item: itemReducer,
  tag: tagReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
