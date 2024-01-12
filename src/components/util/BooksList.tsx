"use client";
import {
  allFilterdBooks,
  useFetchAllBooksQuery,
} from "@/lib/store/features/books_api/books-api-slice";
import React from "react";
import { selectedBooks } from "@/lib/store/features/list/list-slice";
import Not_found from "@/components/util/Not_found";
import List from "@/components/util/List/List";
import List_skeleton_loading from "@/components/util/List/List_skeleton_loading";
import Link from "next/link";
import Button from "@/components/ui/Button";
import More_icon from "@/components/ui/icons/More_icon";
import { useAppSelector } from "@/lib/store/hooks";
import BookCard from "@/components/util/BookCard";

interface Props {
  myBooks?: boolean;
}

const BooksList = ({ myBooks }: Props) => {
  const { isLoading } = useFetchAllBooksQuery();

  const selected = useAppSelector(selectedBooks);
  const allselected = useAppSelector(allFilterdBooks);

  return (
    <>
      {isLoading ? (
        <List_skeleton_loading />
      ) : (
        <>
          {!myBooks && (
            <List>
              {allselected.map((book) => {
                return (
                  <BookCard key={book.id} book={book}>
                    <Link href={`/book/${book.id}`}>
                      <Button className="w-full flex items-center justify-center text-xl">
                        <More_icon />
                        Deatils
                      </Button>
                    </Link>
                  </BookCard>
                );
              })}
            </List>
          )}
          {myBooks && !selected.length && <Not_found />}
          {myBooks && (
            <List>
              {selected.map((book) => {
                return (
                  <BookCard key={book.id} book={book}>
                    <Link href={`/book/${book.id}`}>
                      <Button className="w-full flex items-center justify-center text-xl">
                        <More_icon />
                        Deatils
                      </Button>
                    </Link>
                  </BookCard>
                );
              })}
            </List>
          )}
        </>
      )}
    </>
  );
};

export default BooksList;
