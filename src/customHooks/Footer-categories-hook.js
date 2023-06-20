import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../redux/actions/categoriesAction';

function FooterCategoriesHook() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategories())
    }, [])
    const categories = useSelector(state => state.allCategories.categories);
    const loading = useSelector(state => state.allCategories.loading);
    let allcategories = [];
    if (categories)
        if (categories.data)
            allcategories = categories.data.data.slice(0,4)

    return [allcategories, loading];
}

export default FooterCategoriesHook