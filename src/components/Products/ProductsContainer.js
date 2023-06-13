import React from 'react'

function ProductsContainer({ allProducts }) {
    console.log(allProducts)
    return (
        <div className="all-products">
            <div className="container">
                <div className="products">
                    {allProducts ? (
                        allProducts.map((product, index) => {
                            return (
                                <div className="product-box">
                                    <div className="image">
                                        <img src={product.image} alt="product-image" />
                                    </div>
                                    <div className="text">
                                        <div className="category">{product.category.title}</div>
                                        <div className="description">{product.description}</div>
                                        <div className="title">{product.name}</div>
                                    </div>

                                </div>
                            )
                        })
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default ProductsContainer