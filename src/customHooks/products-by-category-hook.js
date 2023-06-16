import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBycategory } from '../redux/actions/productsaction';

function ProductsByCategoryHook(categoryID) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProductsBycategory(categoryID));
    },[])
    const products = useSelector(state => state.allProducts.productsByCategory);
    const loading = useSelector(state => state.allProducts.loading);
    let productsByCategory = [];
    if (products) {
        if (products.data) {
            productsByCategory = products.data.data.products.data;
        }
    }
    return [productsByCategory, loading]
}

export default ProductsByCategoryHook