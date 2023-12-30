"use client";

import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  console.log(value);

  return (
    <div className="px-4 py-3 flex flex-col gap-2 items-center justify-between md:flex-row sticky top-0 z-50 w-full backdrop-blur-xl bg-black/50">
      <h2 className="text-3xl text-white font-bold">Popular Movies</h2>

      {/* <input
        onChange={(e) => console.log(e.target.value)}
        className="outline-none py-3 px-4 w-full md:w-[20%] rounded-xl focus:outline-2 focus:outline-rose-500"
        type="search"
        placeholder="Search..."
      /> */}
    </div>
  );
};

export default SearchBar;
