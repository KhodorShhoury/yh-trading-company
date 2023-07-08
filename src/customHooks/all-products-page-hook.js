import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductsBySearch, getProductsOnPage } from '../redux/actions/productsaction';

function AllProductsPageHook() {
    const dispatch = useDispatch();
    const [initializeLoading, setIntializeLoading] = useState(true);
    const [searchWord, setSearchWord] = useState(''); // New state for search word

    const getProducts = async (searchWord) => {
        await dispatch(getProductsBySearch(`query=${searchWord}`))
            .then(() => setIntializeLoading(false));
    }

    useEffect(() => {
        getProducts(searchWord);
    }, [searchWord]); // Trigger getProducts when searchWord changes

    const products = useSelector(state => state.allProducts.products);
    const loading = useSelector(state => state.allProducts.loading);

    let allProducts = [];
    let currentPage, total, perPage;
    try {
        if (products && products.data) {
            allProducts = products.data;
            currentPage = allProducts.current_page;
            total = allProducts.total;
            perPage = allProducts.per_page;
        }
    } catch (e) { }

    const getPage = (pageNumber) => {
        setIntializeLoading(true);
        dispatch(getProductsBySearch(`page=${pageNumber}&query=${searchWord}`))
            .then(() => setIntializeLoading(false));
    };

    const onSearchWordChange = (e) => {
        setSearchWord(e.target.value);
    }

    return [allProducts, loading || initializeLoading, currentPage, total, perPage, getPage, getProducts, onSearchWordChange];
}

export default AllProductsPageHook;
