import React from 'react'
import AllCategoriesPageHook from '../../customHooks/all-categories-page-hook'
import '../../scss/components/Categories/AllCategoriesPage.scss';
import CategoriesContainer from '../../components/Categories/CategoriesContainer';
function AllCategoriesPage() {
    const [allCategories] = AllCategoriesPageHook();
    return (
        <>
            <CategoriesContainer allCategories = {allCategories}/>
        </>
    )
}

export default AllCategoriesPage