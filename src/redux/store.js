import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Используем localStorage
import { persistReducer, persistStore } from "redux-persist";
import trucksReducer from "./trucksReducer/trucksSlice";
import { filterReducer } from "./filterReducer/filterSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["trucks"],
};

const rootReducer = combineReducers({
  trucks: trucksReducer,
  filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
