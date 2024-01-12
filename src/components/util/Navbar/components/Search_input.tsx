import Button from "@/components/ui/Button";
import Close_icon from "@/components/ui/icons/Close_icon";
import Search_icon from "@/components/ui/icons/Search_icon";
import { setSearch } from "@/lib/store/features/search/search_slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React from "react";

const Search_input = () => {
  const search = useAppSelector((state) => state.search.search);
  const dispatch = useAppDispatch();
  return (
    <div className="relative md:max-w-[40rem] grow mr-auto">
      <label htmlFor="search_input" className="absolute top-1/4 left-2">
        <Search_icon className="h-5 w-5 opacity-65 fill-first_text_color" />
      </label>
      <input
        placeholder="Enter Title..."
        onChange={(event) => {
          dispatch(setSearch(event.target.value));
        }}
        value={search}
        id="search_input"
        type="text"
        className="bg-bg_1 w-full px-10 md:leading-9 leading-8 focus:outline-none focus:border-first focus:ring-1 focus:ring-first rounded-lg text-first_text_color"
      />
      {search && (
        <Button
          onClick={() => {
            dispatch(setSearch(""));
          }}
          className="absolute top-1 right-1 px-1"
        >
          <Close_icon className="h-4 w-4 opacity-65" />
        </Button>
      )}
    </div>
  );
};

export default Search_input;
