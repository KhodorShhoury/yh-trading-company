import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../redux/actions/categoriesAction';

function AllCategoriesPageHook() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllCategories())
    },[])
    const categories = useSelector(state => state.allCategories.categories);
    const loading = useSelector(state => state.allCategories.loading);
    let allcategories = [];
    if (categories) {
        if (categories.data) {
            allcategories = categories.data.data.categories.data
        }
    }
    return [allcategories,loading]
}

export default AllCategoriesPageHook