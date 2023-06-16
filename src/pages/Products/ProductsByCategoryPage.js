import React from 'react'
import ProductsContainer from '../../components/Products/ProductsContainer'
import ProductsByCategoryHook from '../../customHooks/products-by-category-hook'
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

function ProductsByCategoryPage() {
    const params = useParams();
    const categoryID = params.categoryID;
    const [productsByCategory,loading] = ProductsByCategoryHook(categoryID);
  return (
    <> {!loading ?
      (<ProductsContainer allProducts={productsByCategory} />)
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