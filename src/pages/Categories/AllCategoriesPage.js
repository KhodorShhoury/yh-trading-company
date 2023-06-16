import React from 'react'
import AllCategoriesPageHook from '../../customHooks/all-categories-page-hook'
import CategoriesContainer from '../../components/Categories/CategoriesContainer';
import { TailSpin } from 'react-loader-spinner';
import Pagination from '../../components/utils/Pagination';
function AllCategoriesPage() {
    const [allCategories, loading] = AllCategoriesPageHook();
    return (
        <>
            <CategoriesContainer allCategories={allCategories} loading={loading} />
            <Pagination pagesCount={10}/>
        </>
    )
}

export default AllCategoriesPage