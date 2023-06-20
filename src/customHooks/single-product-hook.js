import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../redux/actions/productsaction';
import { useState } from 'react';

function SingleProductHook(productId) {
    const [initializeLoading, setIntializeLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSingleProduct(productId))
            .then(() => setIntializeLoading(false));
    },[])
    const product = useSelector(state => state.allProducts.product);
    const loading = useSelector(state => state.allProducts.loading);
    let singleProduct = [];
    if (product) {
        if (product.data) {
            singleProduct = product.data;
        }
    }
    return [singleProduct,loading || initializeLoading];
}

export default SingleProductHook