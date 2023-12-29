import React, { useEffect, useState } from "react";
import SuggestionCard from "../components/SuggestionCard.tsx";
import SearchBar from "../components/SearchBar.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import "./homePage.scss";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(
    location.search.slice(7)
  );

  const handleSubmit = (query) => {
    navigate(`/store?query=${query}`);
  };
  useEffect(() => {
    if (searchTerm.length) {
      setShowSuggestions(true);
    }
  }, []);

  return (
    <section className="home_page_section">
      <SearchBar
        query={searchTerm}
        setQuery={setSearchTerm}
        submitHandler={handleSubmit}
        setClick={() => setShowSuggestions(true)}
      />
      {showSuggestions && <SuggestionCard />}
    </section>
  );
};

export default HomePage;
