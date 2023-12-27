import React from "react";
import { useState } from "react";
import "./searchBar.module.scss";
import searchImage from "../../assets/searchIcon.png";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          onChange={handleChange}
          value={searchTerm}
          type="text"
          placeholder="Search"
        />
        <img src={searchImage} alt="" />
      </div>
    </form>
  );
};

export default SearchBar;
