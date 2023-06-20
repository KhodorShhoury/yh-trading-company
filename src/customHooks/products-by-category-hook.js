import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBycategory } from '../redux/actions/productsaction';
import { useState } from 'react';

function ProductsByCategoryHook(categoryID) {
    const dispatch = useDispatch();
    const [initializeLoading,setIntializeLoading] = useState(true);
    useEffect(()=>{
        dispatch(getProductsBycategory(categoryID))
            .then(() => setIntializeLoading(false));
    },[])
    const products = useSelector(state => state.allProducts.productsByCategory);
    const loading = useSelector(state => state.allProducts.loading);
    let productsByCategory = [];
    let currentPage, total, perPage;
    try{
        if (products && products.data && products.data.data) {
            productsByCategory = products.data;
            currentPage = productsByCategory.current_page;
            total = productsByCategory.total;
            perPage = productsByCategory.per_page;
        }
    }catch(e){}
   
    const getPage = (pageNumber) => {
        setIntializeLoading(true);
        dispatch(getProductsBycategory(categoryID,pageNumber))
            .then(() => setIntializeLoading(false));
    };
    return [productsByCategory, loading || initializeLoading, currentPage, total, perPage, getPage]
}

export default ProductsByCategoryHook