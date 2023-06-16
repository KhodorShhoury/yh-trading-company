import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from './ProductCard'
import '../../scss/components/Products/ProductsContainer.scss';
function ProductsContainer({ allProducts }) {
    return (
        <div className="all-products">
            <div className="container">
                <div className="products">
                    {allProducts ? (
                        allProducts.map((product, index) => {
                            return (
                               <ProductCard product={product} key={index}/>
                            )
                        })
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default ProductsContainer