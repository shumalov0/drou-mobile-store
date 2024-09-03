import React from "react";

const Search = () => {
  return (
    
    <div className="bg-my_white  w-full max-w-[350px] flex items-center justify-between rounded-2xl px-6">
      <input
        type="text"
        name="search"
        id="1"
        placeholder="Search our store "
        className=" outline-none p-3"
      />
      <i class="fa-solid fa-magnifying-glass text-[20px] cursor-pointer text-my_darkgray_Text "></i>
    </div>

  );
};

export default Search;
