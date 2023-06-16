import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/actions/productsaction';

function AllProductsPageHook() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
    const products = useSelector(state => state.allProducts.products);
    const loading = useSelector(state => state.allProducts.loading);
    let allProducts = [];
    if (products) {
        if (products.data) {
            allProducts = products.data.data.products.data
        }
    }
    return [allProducts,loading]
}

export default AllProductsPageHook