import { Book } from "@/types/types";
import React from "react";
interface Props {
  book: Book;
}
const Details = ({ book }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-2xl text-dark_4 border-b-2 border-first pb-1">
        {book.title}
      </h2>
      <div className="w-full">
        <div className="flex flex-col gap-2 *:grid *:grid-cols-1 xs:*:grid-cols-3 *:items-center *:border-b *:border-first *:border-opacity-20">
          <div className="">
            <span className="capitalize text-lg text-second_text_color">
              author :
            </span>
            <span className=" pl-1 col-span-2 text-center xs:text-left text-lg">
              {book.author}
            </span>
          </div>
          <div className="">
            <span className="capitalize text-lg text-second_text_color">
              country :
            </span>
            <span className=" pl-1 col-span-2 text-center xs:text-left text-lg">
              {book.country}
            </span>
          </div>
          <div className="">
            <span className="capitalize text-lg text-second_text_color">
              language :
            </span>
            <span className=" pl-1 col-span-2 text-center xs:text-left text-lg">
              {book.language}
            </span>
          </div>
          <div className="">
            <span className="capitalize text-lg text-second_text_color">
              pages :
            </span>
            <span className=" pl-1 col-span-2 text-center xs:text-left text-lg">
              {book.pages}
            </span>
          </div>
          <div className="">
            <span className="capitalize text-lg text-second_text_color">
              year :
            </span>
            <span className=" pl-1 col-span-2 text-center xs:text-left text-lg">
              {book.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
