"use client";
import {
  allFilterdBooks,
  useFetchAllBooksQuery,
} from "@/lib/store/features/books_api/books-api-slice";
import { useAppSelector } from "@/lib/store/hooks";
import React from "react";
import List_skeleton_loading from "../util/List/List_skeleton_loading";
import List from "../util/List/List";
import BookCard from "../util/BookCard";
import Link from "next/link";
import Button from "../ui/Button";
import More_icon from "../ui/icons/More_icon";
import Not_found from "../util/Not_found";

const Home_Page = () => {
  const { isLoading, isSuccess } = useFetchAllBooksQuery();
  const books = useAppSelector(allFilterdBooks);
  return (
    <>
      {isLoading ? (
        <List_skeleton_loading />
      ) : (
        <>
          {books.length && isSuccess ? (
            <List>
              {books.map((book) => {
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
          ) : (
            <Not_found />
          )}
        </>
      )}
    </>
  );
};

export default Home_Page;
