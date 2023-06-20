import React from 'react'
import SingleProductHook from '../../customHooks/single-product-hook'
import { useParams } from 'react-router-dom';
import '../../scss/components/Products/ProductInfo.scss';
function ProductInfo({singleProduct}) {   
  return (
    <div className='product-info'>
        {singleProduct ? (
          <>
          <div className="title">
          <h1>{singleProduct.name}</h1>
          <div className="description">
            <h2>About this item</h2>
            <p>{singleProduct.description}</p>
          </div>
          <div className="info">
            <ul>
                <li><span>Category: </span> <span>{singleProduct.category && singleProduct.category.title}</span> </li>
                <li><span>Brand: </span> <span>{singleProduct.brand && singleProduct.brand.name}</span> </li>
            </ul>
          </div>
          </div>
          </>           
        ) : null}
    </div>
  )
}

export default ProductInfo