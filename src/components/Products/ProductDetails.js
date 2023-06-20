import React, { useEffect, useState } from 'react'
import ProductInfo from './ProductInfo'
import ProductGallery from './ProductGallery'
import '../../scss/components/Products/ProductDetails.scss';
import SingleProductHook from '../../customHooks/single-product-hook';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
function ProductDetails() {
  const {productId} = useParams();
  const [product,setProduct] = useState(null);
  const [singleProduct, loading] = SingleProductHook(productId);
  useEffect(()=>{
    setProduct(singleProduct)
  },[singleProduct])
  return (
    <div className='product-details'>
    {
      !loading ? (<>
          <ProductGallery singleProduct={product} />
          <ProductInfo singleProduct={product} />
        </>) : <TailSpin
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
    }
      
    </div>
  )
}

export default ProductDetails