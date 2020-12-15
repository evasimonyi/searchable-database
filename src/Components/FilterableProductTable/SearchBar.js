import React from 'react';
import './SearchBar.css';

function SearchBar({
  searchedItem,
  handleSearch,
  isStockedOnly,
  handleCheckbox }) {

  return (
    <div className="searchbar">
      <input
        type="text"
        name="searchbar"
        value={searchedItem}
        onChange={(event) => handleSearch(event.target.value)}
        placeholder="Search..." />
      <input
        type="checkbox"
        name="show-in-stock-checkbox"
        id="show-in-stock-checkbox"
        value="show-in-stock-checkbox"
        onClick={() => handleCheckbox(!isStockedOnly)} />
      <label htmlFor="checkbox">Only show products in stock</label>
    </div>
  )
}

export default SearchBar;