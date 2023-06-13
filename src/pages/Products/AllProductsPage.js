import React from 'react'
import ProductsContainer from '../../components/Products/ProductsContainer'
import AllProductsPageHook from '../../customHooks/all-products-page-hook'
import '../../scss/components/Products/AllProductsPage.scss';
function AllProductsPage() {
    const [allProducts] = AllProductsPageHook()

  return (
    <ProductsContainer allProducts = {allProducts}/>
  )
}

export default AllProductsPage