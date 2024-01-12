import BooksList from "@/components/util/BooksList";
import React from "react";

const page = () => {
  return (
    <section className="text-first_text_color max-w-1320 mx-auto">
      <BooksList myBooks />
    </section>
  );
};

export default page;
