import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

function ProductCategory({ category, products, isStockedOnly }) {

  function getProductsAsRow(products) {
    return products.map(product => {
      return (
        <ProductRow
          product={product}
          key={product.category + ' ' + product.name}
        />
      )
    })
  }

  const availableProductList = products.filter(product => product.stocked);
  const availableProductInCategory = getProductsAsRow(availableProductList);
  const allProductInCategory = getProductsAsRow(products);

  return (
    <>
      {(products.length > 0)
        ?
        <>
          <tr>
            <ProductCategoryRow category={category} />
          </tr>
          {isStockedOnly ? availableProductInCategory : allProductInCategory}
        </>
        : null
      }
    </>
  )
}

export default ProductCategory;
