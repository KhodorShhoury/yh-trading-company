import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from './ProductCard'
import '../../scss/components/Products/ProductsContainer.scss';
import { TailSpin } from 'react-loader-spinner';
import SearchProductsHook from '../../customHooks/search-products-hook';
import { FormControl } from 'react-bootstrap';
import NoProducts from '../utils/NoProducts';
function ProductsContainer({ allProducts ,loading}) {
    return (
        <div className="all-products">
            <div className="container">
                
            {!loading ? 
                   
                    (<div className="products">
                        {allProducts.data && allProducts.data.length ? (
                            allProducts.data.map((product, index) => {
                                return (
                                    <ProductCard product={product} key={index} />
                                )
                            })
                        ) : <NoProducts title = "products"/>}
                    </div>)
                    : <TailSpin
                        height="80"
                        width="80"
                        color="#FF431C"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{
                            width: '100%',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                        }}
                        wrapperClass=""
                        visible={true}
                    />}
               
            </div>
        </div>
    )
}

export default ProductsContainer