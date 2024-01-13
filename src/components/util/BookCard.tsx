"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { Book } from "@/types/types";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { add, remove } from "@/lib/store/features/list/list-slice";
import { cn } from "@/lib/utils";
import Plus_icon from "@/components/ui/icons/Plus_icon";
import Close_icon from "@/components/ui/icons/Close_icon";
import Button from "@/components/ui/Button";

const data_iamge =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAYAAAAKhRhlAAABeklEQVR42u3SMQ0AAAjAMBDAg2GsY4KDo5WwLKt7Ao6lsTAWxsJYxsJYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC2MZC2NhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsjGUsjIWxMJYMGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjMU3C3DrikluE9M6AAAAAElFTkSuQmCC";

interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
  book: Book;
  custom_data?: ReactNode;
  children?: ReactNode;
}

const BookCard = ({
  book: { imageLink, title, id },
  className,
  custom_data,
  children,
  ...props
}: BookCardProps) => {
  const list = useAppSelector((state) => state.list.books);
  const dispatch = useAppDispatch();

  const addHandler = () => {
    dispatch(add(id));
  };
  const removeHandler = () => {
    dispatch(remove(id));
  };

  return (
    <article
      className={cn(" h-full bg-bg_2 p-2 rounded-lg", className)}
      {...props}
    >
      <div className="flex flex-col justify-between items-center h-full ">
        <Link href={`/book/${id}`}>
          <Image
            blurDataURL={data_iamge}
            src={`/${imageLink}`}
            alt={title}
            className=""
            width={130}
            height={100}
          />
        </Link>
        <div className="w-full flex flex-col gap-2 py-2">
          {custom_data ? (
            <>{custom_data}</>
          ) : (
            <h2 className="text-xl text-center">{title}</h2>
          )}
          {list.includes(id) ? (
            <Button
              onClick={removeHandler}
              className="w-full flex items-center justify-center text-xl"
            >
              <Close_icon />
              Remove
            </Button>
          ) : (
            <Button
              onClick={addHandler}
              className="w-full flex items-center justify-center text-xl"
            >
              <Plus_icon />
              Add
            </Button>
          )}
          {children}
        </div>
      </div>
    </article>
  );
};

export default BookCard;
