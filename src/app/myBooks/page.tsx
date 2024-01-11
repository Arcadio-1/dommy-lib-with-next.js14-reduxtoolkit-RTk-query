import BooksList from "@/components/Home_page/BooksList";
import React from "react";

const page = () => {
  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      <h1 className="text-first_text_color text-center capitalize py-4 text-4xl">
        my books
      </h1>
      <BooksList myBooks />
    </section>
  );
};

export default page;
