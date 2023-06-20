import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomProducts } from '../redux/actions/productsaction';
import { useState } from 'react';

function HomeRandomProductsHook() {
    const [initializeLoading, setIntializeLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRandomProducts())
            .then(() => setIntializeLoading(false));
    },[])
    const products = useSelector(state => state.allProducts.randomProducts);
    const loading = useSelector(state => state.allProducts.loading);
    
    let randomProducts = [];
    if (products) {
        if (products.data) {
            randomProducts = products.data;
        }
    }
    return [randomProducts, loading || initializeLoading]
}

export default HomeRandomProductsHook