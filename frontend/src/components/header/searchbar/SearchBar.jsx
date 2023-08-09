import React, { useEffect, useState, useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import searchStyles from "./Search.module.css";
import { SearchProductContext } from "../../context/SearchContext";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const { searchResults, setSearchResults } = useContext(SearchProductContext);
  console.log("check", searchResults);

  const fetchSearchedProduct = async (term) => {
    try {
      const response = await axios.get(`/api/products/productbyname/${term}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching for products:", error);
    }
  };

  useEffect(() => {
    fetchSearchedProduct(searchTerm);
  }, [searchTerm]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchSearchedProduct(searchTerm);
  };

  return (
    <div className={searchStyles.form_wrapper}>
      <form className={searchStyles.form_wrapper} onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />

        <button type="submit">
          <Link to={`/searchResult`}>
            <IoIosSearch />
          </Link>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
