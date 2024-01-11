"use client";
import { useFetchBookQuery } from "@/lib/store/features/books_api/books-api-slice";
import React, { useEffect } from "react";

interface IBook {
  id: string;
}

const Book = ({ id }: IBook) => {
  const { data, isFetching, isLoading } = useFetchBookQuery(id);
  useEffect(() => {
    if (data) console.log(data.title);
  }, [data]);
  return <div>{isLoading && <p>loading</p>}</div>;
};

export default Book;
