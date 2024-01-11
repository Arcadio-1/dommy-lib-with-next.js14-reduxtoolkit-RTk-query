"use client";
import Button from "@/components/ui/Button";
import Home_icon from "@/components/ui/icons/Home_icon";
import My_books_icon from "@/components/ui/icons/My_books_icon";
import Link from "next/link";
import React from "react";

const Nav_sub = () => {
  return (
    <aside className="fixed flex z-50 bottom-0 right-0 items-center justify-center gap-2 px-2 w-full rounded-t-xl bg-bg_2 md:hidden border-t-first border-t-[1px]">
      <Link className="w-full" href={"/"}>
        <Button className="border-transparent py-2 w-full justify-center">
          <Home_icon className="h-6 w-6 fill-first " />
          Home
        </Button>
      </Link>
      <div className="border h-6 opacity-20"></div>
      <Link className="w-full" href={"/myBooks"}>
        <Button className="border-transparent py-2 w-full justify-center">
          <My_books_icon className="h-6 w-6 fill-first" />
          my books
        </Button>
      </Link>
    </aside>
  );
};

export default Nav_sub;
