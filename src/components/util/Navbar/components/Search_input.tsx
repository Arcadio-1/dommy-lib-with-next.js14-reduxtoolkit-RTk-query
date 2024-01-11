import Search_icon from "@/components/ui/icons/Search_icon";
import React from "react";

const Search_input = () => {
  return (
    <div className="relative md:max-w-[40rem] grow mr-auto">
      <label htmlFor="search_input" className="absolute top-1/4 left-2">
        <Search_icon className="h-5 w-5 opacity-65 fill-first_text_color" />
      </label>
      <input
        id="search_input"
        type="text"
        className="bg-bg_1 w-full pl-10 md:leading-9 leading-8 focus:outline-none focus:border-first focus:ring-1 focus:ring-first rounded-lg "
      />
    </div>
  );
};

export default Search_input;
