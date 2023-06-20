import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../scss/components/Products/ProductCard.scss';
import { Button, Card } from 'react-bootstrap';
function ProductCard({ product }) {
    return (
        <>
            {product ? (
                <div className="product-card">
                    <NavLink to={`/products/${product.slug}`}>
                        <div className="image">
                            <img src={product.image} alt="" />
                        </div>
                    </NavLink>

                    <div className="text">

                        <NavLink to={`/products/${product.slug}`} className='title'>{product.name}</NavLink>
                        <div className="category">
                            {product.category && product.category.title}
                        </div>
                        <p className="description">{product.description &&product.description.length > 100 ? `${product.description.slice(0, 50)}...` : product.description}</p>
                    </div>
                </div>
            ) : null}
        </>
       
        
    )
}

export default ProductCard