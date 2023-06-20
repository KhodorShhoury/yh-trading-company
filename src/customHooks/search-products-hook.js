import React from 'react'
import { useState } from 'react'
import AllProductsPageHook from './all-products-page-hook'
import { useEffect } from 'react';

function SearchProductsHook() {


    const [allProducts, loading, currentPage, total, perPage, getPage, getProducts] = AllProductsPageHook();
    const [searchWord, setSearchWord] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            getProducts();
        }, 500)

        return () => clearTimeout(timer)
    }, [searchWord])


    const onSearchWordChange = (e) => {
        sessionStorage.setItem("searchWord", e.target.value);
        setSearchWord(e.target.value);
        const path = window.location.pathname;
        if(path != "/products"){
            window.location.href = "/products"
        }

    }
    return [onSearchWordChange, searchWord]
}

export default SearchProductsHook