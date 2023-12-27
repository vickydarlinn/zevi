import React from "react";
import { useState } from "react";
import searchImage from "../assets/searchIcon.png";
import SuggestionCard from "./SuggestionCard.tsx";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowSuggestions(false);
    setSearchTerm(e.target.value);
  };

  const handleShowSuggestions = () => {
    setShowSuggestions(true);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="search_bar">
        <div>
          <input
            onChange={handleChange}
            onClick={handleShowSuggestions}
            value={searchTerm}
            type="text"
            placeholder="Search"
          />
          <img src={searchImage} alt="" />
        </div>
      </form>
      {showSuggestions && <SuggestionCard />}
    </>
  );
};

export default SearchBar;
