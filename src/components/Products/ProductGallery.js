import React, { useState } from 'react'
import SingleProductHook from '../../customHooks/single-product-hook';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Thumbs } from "swiper";
import { useParams } from 'react-router-dom';
import '../../scss/components/Products/ProductGallery.scss';
function ProductGallery({singleProduct}) {
   
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='product-gallery'>
            {singleProduct ? (
                <>
                    <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2"
                    >
                        {singleProduct.images ? (
                            singleProduct.images.map((image, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={image} />
                                    </SwiperSlide>
                                )
                            })
                        ) : null}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper"
                    >
                        {singleProduct.images ? (
                            singleProduct.images.map((image, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={image} />
                                    </SwiperSlide>
                                )
                            })
                        ) : null}
                    </Swiper>
                </>
            ) : null}
        </div>
    )
}
export default ProductGallery