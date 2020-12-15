import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable/ProductTable';
import data from '../../product-data';
import './FilterableProductTable.css';

function FilterableProductTable() {

  const [isStockedOnly, setIsStockedOnly] = useState(false);
  const [searchedItem, setSearchedItem] = useState('');

  return (
    <section className="filterable-product-table">
      <SearchBar
        isStockedOnly={isStockedOnly}
        searchedItem={searchedItem}
        handleCheckbox={setIsStockedOnly}
        handleSearch={setSearchedItem}
      />
      <ProductTable
        products={data}
        searchedItem={searchedItem}
        isStockedOnly={isStockedOnly} />
    </section>
  )
}

export default FilterableProductTable;