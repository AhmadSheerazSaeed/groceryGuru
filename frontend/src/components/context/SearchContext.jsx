import { createContext, useState } from "react";

const SearchProductContext = createContext();
const SearchProductContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <SearchProductContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchProductContext.Provider>
  );
};
export { SearchProductContext, SearchProductContextProvider };
