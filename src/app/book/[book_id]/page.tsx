import Book from "@/components/Book_page/Book";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

interface Props {
  params: {
    book_id: string;
  };
}
const page = ({ params: { book_id } }: Props) => {
  return (
    <div>
      <Link href={"/"}>
        <Button>back</Button>
      </Link>
      <Book id={book_id} />
    </div>
  );
};

export default page;
