import React from "react";
import searchImage from "../assets/searchIcon.png";
import { useNavigate } from "react-router-dom";
import "./searchBar.scss";

const SearchBar = ({
  query,
  setQuery,
  submitHandler,
  setClick,
  showOutline = false,
}) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    navigate(`?query=${e.target.value}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`search_bar `}>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
          onClick={setClick}
          className={`${showOutline && "black_outline"}`}
        />
        <img src={searchImage} alt="" />
      </div>
    </form>
  );
};

export default SearchBar;
