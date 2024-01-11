import { Book } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSliceAllbooks = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-json-server.typicode.com/Arcadio-1/books",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchAllBooks: builder.query<Book[], void>({
        query() {
          return `/books`;
        },
      }),
      fetchBook: builder.query<Book, string>({
        query(id) {
          return `/books/${id}`;
        },
      }),
    };
  },
});

export const { useFetchAllBooksQuery, useFetchBookQuery } = apiSliceAllbooks;
