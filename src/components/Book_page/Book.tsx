"use client";
import { useFetchBookQuery } from "@/lib/store/features/books_api/books-api-slice";
import React, { useEffect } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Not_found from "@/components/util/Not_found";
import BookCard from "@/components/util/BookCard";
import Back_icon from "@/components/ui/icons/Back_icon";
import Details from "./Details";

interface IBook {
  id: string;
}

const Book = ({ id }: IBook) => {
  const { data: book, isLoading, isSuccess } = useFetchBookQuery(id);
  return (
    <div className="w-full flex justify-center">
      {isLoading ? (
        <h1 className="text-lg text-first_text_color">Loading</h1>
      ) : (
        <>
          {isSuccess ? (
            <BookCard
              className="max-w-80 grow"
              book={book}
              custom_data={<Details book={book} />}
            >
              <Link href={`/`}>
                <Button className="w-full flex items-center justify-center text-xl">
                  <Back_icon />
                  Home
                </Button>
              </Link>
            </BookCard>
          ) : (
            <Not_found />
          )}
        </>
      )}
    </div>
  );
};

export default Book;
