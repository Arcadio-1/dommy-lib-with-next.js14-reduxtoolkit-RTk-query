import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListState {
  books: string[];
}

const initialState: ListState = {
  books: [],
};

const listSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      state.books = [...state.books, action.payload];
    },
    remove(state, action: PayloadAction<string>) {
      state.books = state.books.filter((book) => book !== action.payload);
    },
  },
});

export const { add, remove } = listSlice.actions;
export default listSlice.reducer;
