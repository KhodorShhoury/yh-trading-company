import React from 'react';
import ProductsContainer from '../../components/Products/ProductsContainer';
import AllProductsPageHook from '../../customHooks/all-products-page-hook';
import { TailSpin } from 'react-loader-spinner';
import Pagination from 'react-js-pagination';
import SearchProductsHook from '../../customHooks/search-products-hook';

function AllProductsPage() {
  const [allProducts, loading, currentPage, total, perPage, getPage] = AllProductsPageHook();

  return (
    <>
        <div style={{minHeight:'100vh',paddingTop:'72px'}}>
          <ProductsContainer allProducts={allProducts} loading = {loading}/>
          {
            total > 0 &&
          <Pagination
            activePage={currentPage}
            totalItemsCount={total}
            itemsCountPerPage={perPage}
            onChange={pageNumber => getPage(pageNumber)}
            nextPageText='next'
            prevPageText='prev'
            innerClass='pagination-ul'
            activeClass='pagination-active-item'
            activeLinkClass='pagination-active-link'
            itemClass='pagination-item'
            linkClass='pagination-link'
          />
            
          }
          
        </div>
    </>
  );
}

export default AllProductsPage;
