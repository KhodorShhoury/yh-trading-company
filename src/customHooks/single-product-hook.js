import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../redux/actions/productsaction';

function SingleProductHook(productId) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSingleProduct(productId))
    },[])
    const product = useSelector(state => state.allProducts.product);
    const loading = useSelector(state => state.allProducts.loading);
    console.log(loading);
    console.log(product)
    let singleProduct = [];
    if (product) {
        if (product.data) {
            singleProduct = product.data.data.product;
        }
    }
    return [singleProduct,loading]
}

export default SingleProductHook