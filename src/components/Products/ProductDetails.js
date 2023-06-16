import React from 'react'
import ProductInfo from './ProductInfo'
import ProductGallery from './ProductGallery'
import '../../scss/components/Products/ProductDetails.scss';
function ProductDetails() {
  return (
    <div className='product-details'>
      <ProductGallery/>
      <ProductInfo />
    </div>
  )
}

export default ProductDetails