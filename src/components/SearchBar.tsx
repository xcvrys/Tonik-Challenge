import React from "react";
import { SearchBarProps } from "@types";
import "../styles/App.css";

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  perPage,
  setPerPage,
}) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(parseInt(event.target.value));
  };

  return (
    <div className="Gap_container">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search GitHub repositories..."
      />
      <select value={perPage} onChange={handlePerPageChange}>
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
      </select>
    </div>
  );
};

export default SearchBar;
