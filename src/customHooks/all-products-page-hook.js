import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductsBySearch, getProductsOnPage } from '../redux/actions/productsaction';

function AllProductsPageHook() {
    const dispatch = useDispatch();
    const [initializeLoading, setIntializeLoading] = useState(true);
    const getProducts = async () => {
        let word = "";
        if (sessionStorage.getItem("searchWord") != null)
            word = sessionStorage.getItem("searchWord");
        await dispatch(getProductsBySearch(`query=${word}`))
            .then(() => setIntializeLoading(false));
    }
    useEffect(() => {
        getProducts();
    }, []);

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
        let word = "";
        if (sessionStorage.getItem("searchWord") != null)
            word = sessionStorage.getItem("searchWord");
        setIntializeLoading(true);
        dispatch(getProductsBySearch(`page=${pageNumber}&query=${word}`))
            .then(() => setIntializeLoading(false));
    };
    return [allProducts, loading || initializeLoading, currentPage, total, perPage, getPage, getProducts];
}

export default AllProductsPageHook;