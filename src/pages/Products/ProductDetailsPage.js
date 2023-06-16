import React from 'react'
import SingleProductHook from '../../customHooks/single-product-hook'
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/Products/ProductDetails';
import { ThreeDots } from 'react-loader-spinner';

function ProductDetailsPage() {
  return (
    <div >
      <div className="container" style={{ minHeight: '100vh' }}>
      <ProductDetails />
      </div>
    </div>
  )
}

export default ProductDetailsPage