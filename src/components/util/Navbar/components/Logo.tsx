import Image from "next/image";
import React from "react";
import logo_image from "@/assets/image/Logo.png";
const Logo = () => {
  return (
    <div className="flex justify-center items-center w-full md:w-auto ">
      <Image
        src={logo_image}
        alt={"dummy lib"}
        className="max-w-36 md:max-w-48"
        width={200}
        height={20}
      />
    </div>
  );
};

export default Logo;
