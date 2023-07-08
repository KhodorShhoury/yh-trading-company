import React from 'react'
import { useState } from 'react'
import AllProductsPageHook from './all-products-page-hook'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchProductsHook() {
    const [allProducts, loading, currentPage, total, perPage, getPage, getProducts] = AllProductsPageHook();
    const [searchWord, setSearchWord] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            getProducts(searchWord);
        }, 500)

        return () => clearTimeout(timer)
    }, [searchWord])


    const onSearchWordChange = (e) => {
        setSearchWord(e.target.value);
        const path = window.location.pathname;

        if (path !== "/products") {
            navigate('/products'); // Navigate to the All Products page without refreshing
        }

    }
    return [onSearchWordChange, searchWord]
}

export default SearchProductsHook