import React from 'react'
import ProductsContainer from '../../components/Products/ProductsContainer'
import AllProductsPageHook from '../../customHooks/all-products-page-hook'
import { TailSpin } from 'react-loader-spinner';
function AllProductsPage() {
    const [allProducts,loading] = AllProductsPageHook();

  return (
    <>
      {!loading ? (
        <ProductsContainer allProducts={allProducts} />
      ) : <TailSpin
        height="80"
        width="80"
        color="#FF431C"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{
          width: '100%',
          height : '100vh',
          display: 'flex',
          justifyContent: "center",
          alignItems : 'center',
        }}
        wrapperClass=""
        visible={true}
      />
      }
    </>
    
  )
}

export default AllProductsPage