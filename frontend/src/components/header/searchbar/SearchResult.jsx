import React, { useContext } from "react";
import { SearchProductContext } from "../../context/SearchContext";
import ProductCard from "./ProductCard";

export default function SearchResult() {
  const { searchResults } = useContext(SearchProductContext);
  console.log("result", searchResults);
  return (
    <div>
      <h1>SearchResult</h1>
      <div>
        {searchResults.map((result) => (
          <ProductCard key={result.id} product={result} />
        ))}
      </div>
    </div>
  );
}
