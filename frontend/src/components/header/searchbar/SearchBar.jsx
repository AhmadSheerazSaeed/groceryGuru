// import React from "react";
// import { IoIosSearch } from "react-icons/io";
// import searchStyles from "./Search.module.css";

// function SearchBar() {
//   return (
//     <div className={searchStyles.form_wrapper}>
//       <form className={searchStyles.form_wrapper}>
//         <input placeholder="Search" />
//         <IoIosSearch />
//       </form>
//     </div>
//   );
// }

// export default SearchBar;
//uper is original sheeraz code

// import React, { useEffect, useState } from "react";
// import { IoIosSearch } from "react-icons/io";
// import axios from "axios";
// import searchStyles from "./Search.module.css";
// import ProductCard from "./ProductCard";

// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   useEffect(() => {
//     handleSearchSubmit();
//   }, []);
//   const handleSearchInputChange = (event) => {
//     console.log("search t");
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = async (event) => {
//     event.preventDefault();
//     const fetchSearchedProduct = async () => {
//       try {
//         const response = await axios.get(
//           `/api/products/productbyname/${searchTerm}`
//         );
//         console.log(response.data);

//         setSearchResults(response.data);
//         console.log("result ", response.data);
//       } catch (error) {
//         console.error("Error searching for products:", error);
//       }
//     };
//   };

//   return (
//     <div className={searchStyles.form_wrapper}>
//       <form className={searchStyles.form_wrapper} onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleSearchInputChange}
//         />
//         <button type="submit">
//           <IoIosSearch />
//         </button>
//       </form>

//       <div>
//         {searchResults.map((result) => (
//           <ProductCard key={result.id} product={result} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchBar;


import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import searchStyles from "./Search.module.css";
import ProductCard from "./ProductCard";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
          <IoIosSearch />
        </button>
      </form>

      <div>
        {searchResults.map((result) => (
          <ProductCard key={result.id} product={result} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;