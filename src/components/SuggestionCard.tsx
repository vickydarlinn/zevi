import React from "react";
import { faker } from "@faker-js/faker";

const SuggestionCard = () => {
  return (
    <>
      <div className="trending_suggestion_wrapper">
        <div className="trending_suggestion_modal">
          <h2 className="trending_suggestion_heading">Latest Trends</h2>
          <div className="trending_cards">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <div>
                  <img
                    key={index}
                    src={faker.image.url({ height: 300, width: 200 })}
                    alt=""
                  />
                  <div>{faker.commerce.product()}</div>
                </div>
              ))}
          </div>
          <h2 className="trending_suggestion_heading">Popular Suggestions</h2>
          <div>
            {Array(5)
              .fill(1)
              .map((_, index) => {
                return (
                  <p className="trending_suggestion_keyword" key={index}>
                    {faker.commerce.product()}
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
