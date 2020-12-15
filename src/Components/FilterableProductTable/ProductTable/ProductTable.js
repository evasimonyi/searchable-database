import React from 'react';
import ProductCategory from './ProductCategory';

function FilterableProductTable({ products, isStockedOnly, searchedItem }) {
  const productCategories = [...new Set(products.map(product => product.category))];

  function filterProductsByCategory(category) {
    return products.filter(product => {
      return product.category === category &&
        product.name.toLowerCase().includes(searchedItem.toLowerCase())
    })
  }

  const productsByCategories = productCategories.map(category => {
    return (
      <ProductCategory
        key={category}
        category={category}
        products={filterProductsByCategory(category)}
        isStockedOnly={isStockedOnly}
      />
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsByCategories}
      </tbody>
    </table>
  )
}

export default FilterableProductTable;
