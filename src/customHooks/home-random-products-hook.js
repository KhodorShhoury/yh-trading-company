import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomProducts } from '../redux/actions/productsaction';

function HomeRandomProductsHook() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRandomProducts());
    },[])
    const products = useSelector(state => state.allProducts.randomProducts);
    const loading = useSelector(state => state.allProducts.loading);
    
    let randomProducts = [];
    if (products) {
        if (products.data) {
            randomProducts = products.data.data.products.data;
        }
    }
    return [randomProducts, loading]
}

export default HomeRandomProductsHook