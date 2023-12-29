import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.tsx";
import "./storePage.scss";
import { useLocation } from "react-router-dom";
import { productsData } from "../data.tsx";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoStarOutline,
  IoStar,
} from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { FaFilter } from "react-icons/fa";

const StorePage = () => {
  const location = useLocation();
  const [searchedQuery, setSearchedQuery] = useState<string>(
    location.search.slice(7)
  );
  const handleSubmit = () => {
    console.log(searchedQuery);
  };
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const applyFilters = () => {
      const filteredData = productsData.filter((product) => {
        const brandMatches =
          selectedBrand === "" || product.brand === selectedBrand;
        const priceMatches =
          selectedPriceRange === "" ||
          (selectedPriceRange === "Under 500" && product.price < 500) ||
          (selectedPriceRange === "Above 500" && product.price >= 500);
        const ratingMatches =
          selectedRating === "" ||
          product.rating === parseInt(selectedRating.split(" ")[0], 10);
        const queryMatches =
          searchedQuery === "" ||
          product.name.toLowerCase().includes(searchedQuery.toLowerCase());
        return brandMatches && priceMatches && ratingMatches && queryMatches;
      });
      setFilteredProducts(filteredData);
    };

    applyFilters();
  }, [
    productsData,
    selectedBrand,
    selectedPriceRange,
    selectedRating,
    searchedQuery,
  ]);
  const handleFilterToggle = () => {
    setShowFilters(true);
  };

  return (
    <div className="store_section">
      <div>
        <SearchBar
          query={searchedQuery}
          setQuery={setSearchedQuery}
          showOutline={true}
          submitHandler={handleSubmit}
          setClick={undefined}
        />
      </div>
      <div className="hamburger">
        <FaFilter onClick={handleFilterToggle} />
      </div>
      {searchedQuery.length > 0 && (
        <div className="search_suggestion_heading">
          Search Results: {searchedQuery}
        </div>
      )}
      <div className="store">
        <div
          className={showFilters ? "filters_wrapper active" : "filters_wrapper"}
        >
          <FilterCard
            selectedBrand={selectedBrand}
            selectedPriceRange={selectedPriceRange}
            selectedRating={selectedRating}
            setSelectedBrand={setSelectedBrand}
            setSelectedPriceRange={setSelectedPriceRange}
            setSelectedRating={setSelectedRating}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
        </div>
        <div className="products_wrapper">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="not_found"> oops... No Products found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorePage;

const ProductCard = ({ product }) => {
  const [isWishList, setIsWishList] = useState(false);
  const handleClick = () => {
    setIsWishList(!isWishList);
  };
  const stars = Array(product.rating).fill(<IoStar />);
  return (
    <div className="product_card">
      <div className="image_wrapper">
        <img src={product.image} alt="random product" />
        <div className="view_btn">View Product</div>
      </div>
      <p className="title">{product.name}</p>
      <p className="price">
        <span className="old_price">
          Rs.{Number((product.price * 110) / 100).toFixed(0)}
        </span>
        <span className="discount_price">
          Rs.{Number(product.price).toFixed(0)}
        </span>
      </p>
      <p className="reviews">
        <span className="rating"> {stars}</span>{" "}
        <span className="rated_by">({product.ratedBy})</span>
      </p>
      <span className="heart" onClick={handleClick}>
        {isWishList ? (
          <IoHeartSharp className="text-red-600 text-xl" />
        ) : (
          <IoHeartOutline className="text-xl text-white" />
        )}
      </span>
    </div>
  );
};

const FilterCard = ({
  setSelectedBrand,
  setSelectedPriceRange,
  setSelectedRating,
  selectedBrand,
  selectedPriceRange,
  selectedRating,
  showFilters,
  setShowFilters,
}) => {
  const handleBrandChange = (brand) => {
    setSelectedBrand((prevBrand) => (prevBrand === brand ? "" : brand));
  };

  const handlePriceRangeChange = (priceRange) => {
    setSelectedPriceRange((prevPriceRange) =>
      prevPriceRange === priceRange ? "" : priceRange
    );
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating((prevRating) => (prevRating === rating ? "" : rating));
  };

  const renderStars = (rating) => {
    const filledStars = rating;
    const emptyStars = 5 - filledStars;

    const stars: JSX.Element[] = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<IoStar key={i} className="star_filled" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <IoStarOutline key={i + filledStars} className="star_empty" />
      );
    }

    return stars;
  };

  return (
    <div className="filter_card">
      {showFilters && (
        <div className="filter_close" onClick={toggleFilters}>
          <ImCross />{" "}
        </div>
      )}
      <p className="filter_heading">Brands</p>
      <div className="filter_radios">
        <label>
          <input
            type="checkbox"
            name="brand"
            checked={selectedBrand === "Mango"}
            onChange={() => handleBrandChange("Mango")}
          />
          Mango
        </label>

        <label>
          <input
            type="checkbox"
            name="brand"
            checked={selectedBrand === "H&M"}
            onChange={() => handleBrandChange("H&M")}
          />
          H&M
        </label>
      </div>
      <p className="filter_heading">Price Range</p>
      <div className="filter_radios">
        <label>
          <input
            type="checkbox"
            name="priceRange"
            checked={selectedPriceRange === "Under 500"}
            onChange={() => handlePriceRangeChange("Under 500")}
          />
          Under 500
        </label>
        <label>
          <input
            type="checkbox"
            name="priceRange"
            checked={selectedPriceRange === "Above 500"}
            onChange={() => handlePriceRangeChange("Above 500")}
          />
          Above 500
        </label>
      </div>
      <p className="filter_heading">Ratings</p>
      <div className="filter_radios">
        {[5, 4, 3, 2, 1].map((rating) => (
          <label key={rating}>
            <input
              type="checkbox"
              name="ratings"
              checked={selectedRating === `${rating} Star`}
              onChange={() => handleRatingChange(`${rating} Star`)}
            />

            {renderStars(rating)}
          </label>
        ))}
      </div>
    </div>
  );
};
