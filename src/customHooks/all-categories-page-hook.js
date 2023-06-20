import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories, getCategoriesOnPage } from '../redux/actions/categoriesAction';
import { useState } from 'react';

function AllCategoriesPageHook() {
    const [initialLoading, setInitialLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllCategories())
            .then(() => setInitialLoading(false));
    },[])
    const categories = useSelector(state => state.allCategories.categories);
    const loading = useSelector(state => state.allCategories.loading);
    let allcategories = [];
    if (categories) {
        if (categories.data) {
            allcategories = categories.data;
        }
    }
    //to get page count
    let currentPage ,total,perPage;
    try {
        if (categories)
            currentPage = allcategories.current_page;
            total = allcategories.total;
            perPage = allcategories.per_page;
    } catch (e) { }
    // when press pagination
    const getPage = (page) => {
        setInitialLoading(true)
        dispatch(getCategoriesOnPage(page))
            .then(() => setInitialLoading(false));
    }
    return [allcategories, loading || initialLoading, currentPage,total,perPage,getPage]
}

export default AllCategoriesPageHook