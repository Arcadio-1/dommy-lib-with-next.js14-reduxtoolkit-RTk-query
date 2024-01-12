import Image from "next/image";
import React from "react";
import notfound_Svg from "@/assets/image/not-found.png";
import Link from "next/link";
import Button from "../ui/Button";

const Not_found = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-6 w-full max-w-xl mx-auto p-8">
      <Image
        className=""
        src={notfound_Svg}
        width={200}
        height={80}
        alt="no books found"
      />
      <Link className="capitalize text-2xl" href={"/"}>
        <Button>Go Away! Read Some Books!</Button>
      </Link>
    </div>
  );
};

export default Not_found;
