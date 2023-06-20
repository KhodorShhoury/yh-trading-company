import React from 'react'
import ProductsContainer from '../../components/Products/ProductsContainer'
import ProductsByCategoryHook from '../../customHooks/products-by-category-hook'
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import Pagination from 'react-js-pagination';

function ProductsByCategoryPage() {
    const params = useParams();
    const categoryID = params.categoryID;
  const [productsByCategory, loading, currentPage, total, perPage, getPage] = ProductsByCategoryHook(categoryID);
  console.log(productsByCategory)
  return (
    <> {!loading ?
      (
        <div style={{ minHeight: '100vh', paddingTop: '72px' }}>
          <ProductsContainer allProducts={productsByCategory} />
          {
            total > 1 && <Pagination
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
      )
      : <TailSpin
        height="80"
        width="80"
        color="#FF431C"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: "center",
          alignItems: 'center',
        }}
        wrapperClass=""
        visible={true}
      />
    }</>
   
      
  )
}

export default ProductsByCategoryPage