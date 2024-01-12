import Book from "@/components/Book_page/Book";
import React from "react";

interface Props {
  params: {
    book_id: string;
  };
}
const page = ({ params: { book_id } }: Props) => {
  return (
    <section className="flex items-center justify-center mt-5">
      <Book id={book_id} />
    </section>
  );
};

export default page;
