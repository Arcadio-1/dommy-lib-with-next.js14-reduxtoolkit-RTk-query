import Button from "@/components/ui/Button";
import Home_icon from "@/components/ui/icons/Home_icon";
import My_books_icon from "@/components/ui/icons/My_books_icon";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <ul className="md:flex items-center justify-center gap-2 hidden ">
      <li>
        <Link href={"/"}>
          <Button className="group">
            <Home_icon className="h-6 w-6 fill-first group-hover:fill-first_text_color transition-all duration-200" />
            Home
          </Button>
        </Link>
      </li>
      <li>
        <Link href={"/myBooks"}>
          <Button className="group">
            <My_books_icon className="h-6 w-6 fill-first group-hover:fill-first_text_color  transition-all duration-200" />
            my books
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
