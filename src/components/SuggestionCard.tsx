import React from "react";
import { latestTrendsData } from "../data.tsx";
import "./suggestionCard.scss";
import { useNavigate } from "react-router-dom";

const SuggestionCard = () => {
  const navigate = useNavigate();
  const set = (query) => {
    navigate(`/store?query=${query}`);
  };
  return (
    <>
      <div className="trending_suggestion_wrapper">
        <div className="trending_suggestion_modal">
          <h2 className="trending_suggestion_heading">Latest Trends</h2>
          <div className="trending_cards">
            {latestTrendsData.map((item, index) => (
              <div onClick={() => set(item.name)}>
                <img key={index} src={item.image} alt="" />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
          <h2 className="trending_suggestion_heading">Popular Suggestions</h2>
          <div>
            {latestTrendsData.map((item, index) => {
              return (
                <p
                  className="trending_suggestion_keyword"
                  key={index}
                  onClick={() => set(item.name)}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionCard;
