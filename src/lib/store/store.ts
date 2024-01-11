import { configureStore, createSelector } from "@reduxjs/toolkit";
import { apiSliceAllbooks } from "./features/books_api/books-api-slice";
import listReducer from "@/lib/store/features/list/list-slice";
export const store = configureStore({
  reducer: {
    list: listReducer,
    [apiSliceAllbooks.reducerPath]: apiSliceAllbooks.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSliceAllbooks.middleware);
  },
});

export const selectedBooks = createSelector(
  (state: RootState) =>
    apiSliceAllbooks.endpoints.fetchAllBooks.select(undefined)(state)?.data,
  (state: RootState) => state.list,
  (books, list) =>
    (books || []).filter((books) => list.books.includes(books.id))
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
