"use client";
import {
  allFilterdBooks,
  useFetchAllBooksQuery,
} from "@/lib/store/features/books_api/books-api-slice";
import React from "react";
import BookCard from "./BookCard/BookCard";
import { useSelector } from "react-redux";
import { selectedBooks } from "@/lib/store/features/list/list-slice";
import Not_found from "../MyBooks_page/Not_found";
import List from "../ui/List";
import List_skeleton_loading from "../ui/List_skeleton_loading";

interface Props {
  myBooks?: boolean;
}

const BooksList = ({ myBooks }: Props) => {
  const { isLoading } = useFetchAllBooksQuery();
  const selected = useSelector(selectedBooks);
  const allselected = useSelector(allFilterdBooks);
  return (
    <>
      {isLoading ? (
        <List_skeleton_loading />
      ) : (
        <>
          {!myBooks && (
            <List>
              {allselected.map((book) => {
                return <BookCard key={book.id} book={book} />;
              })}
            </List>
          )}
          {myBooks && !selected.length && <Not_found />}
          {myBooks && (
            <List>
              {selected.map((book) => {
                return <BookCard key={book.id} book={book} />;
              })}
            </List>
          )}
        </>
      )}
    </>
  );
};

export default BooksList;
