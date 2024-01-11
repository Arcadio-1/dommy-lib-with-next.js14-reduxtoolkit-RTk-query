"use client";
import React from "react";
import Link from "next/link";
import { Book } from "@/types/types";
import Image from "next/image";
import Button from "../../ui/Button";
import Plus_icon from "../../ui/icons/Plus_icon";
import Close_icon from "../../ui/icons/Close_icon";
import More_icon from "../../ui/icons/More_icon";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { add, remove } from "@/lib/store/features/list/list-slice";
interface Props {
  book: Book;
}

const BookCard = ({ book: { imageLink, title, id } }: Props) => {
  const list = useAppSelector((state) => state.list.books);
  const dispatch = useAppDispatch();

  const addHandler = () => {
    dispatch(add(id));
  };
  const removeHandler = () => {
    dispatch(remove(id));
  };
  return (
    <div className=" h-full bg-bg_2 p-2 rounded-lg">
      <div className="flex flex-col justify-between items-center h-full ">
        <Link href={`/book/${id}`}>
          <Image
            src={`/${imageLink}`}
            alt={title}
            className="w-full"
            width={130}
            height={100}
          />
        </Link>
        <div className="w-full flex flex-col gap-2 py-2">
          <h2 className="text-xl text-center">{title}</h2>

          {!list.includes(id) && (
            <Button
              onClick={addHandler}
              className="w-full flex items-center justify-center text-xl"
            >
              <Plus_icon />
              Add
            </Button>
          )}
          {list.includes(id) && (
            <Button
              onClick={removeHandler}
              className="w-full flex items-center justify-center text-xl"
            >
              <Close_icon />
              Remove
            </Button>
          )}

          <Link href={`/book/${id}`}>
            <Button className="w-full flex items-center justify-center text-xl">
              <More_icon />
              Deatils
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
