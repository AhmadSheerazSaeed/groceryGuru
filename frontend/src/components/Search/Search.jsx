import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import searchStyles from "./Search.module.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/api/products/productbyname/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching for products:", error);
    }
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
          <IoIosSearch />
        </button>
      </form>

      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <p>{result.itemName}</p>
            <p>{result.price}</p>
            {/*more product details can be added below*/}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;

