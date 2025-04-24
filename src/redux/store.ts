import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    [myReducer.name]: myReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
