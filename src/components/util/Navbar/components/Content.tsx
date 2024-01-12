"use client";

import React from "react";
import Headroom from "react-headroom";
import Search_input from "./Search_input";
import Navigation from "./Navigation";
import Logo from "./Logo";
const Content = () => {
  return (
    <Headroom>
      <section className="bg-bg_2 relative">
        <nav
          className={`max-w-1320 py-2 md:py-3 px-2 flex items-center justify-between gap-1 md:gap-5 mx-auto flex-wrap bg-bg_2`}
        >
          <Logo />
          <Search_input />
          <Navigation />
        </nav>
      </section>
    </Headroom>
  );
};

export default Content;
