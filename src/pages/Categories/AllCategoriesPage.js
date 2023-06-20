import React from 'react'
import AllCategoriesPageHook from '../../customHooks/all-categories-page-hook'
import CategoriesContainer from '../../components/Categories/CategoriesContainer';
import Pagination from 'react-js-pagination';
function AllCategoriesPage() {
    const [allCategories, loading, currentPage, total, perPage, getPage] = AllCategoriesPageHook();
    return (
        <div style={{minHeight : '100vh',paddingTop : '72px'}}>
            <CategoriesContainer allCategories={allCategories} loading={loading} />
            { total > 1 &&
                (
                    <Pagination
                    activePage={currentPage}
                    totalItemsCount={total}
                    itemsCountPerPage={perPage}
                    onChange={pageNumber => getPage(pageNumber)}
                    nextPageText='next'
                    prevPageText='prev'
                    innerClass='pagination-ul'
                    activeClass = 'pagination-active-item'
                    activeLinkClass= 'pagination-active-link' 
                    itemClass = 'pagination-item'
                    linkClass='pagination-link'
                    />)
                    
            }
        </div>
    )
}

export default AllCategoriesPage