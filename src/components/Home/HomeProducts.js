import React from 'react'
import MainHeading from '../utils/MainHeading'
import cupsImage from '../../assets/imgs/cups.png';
import lampImage from '../../assets/imgs/lamp-stand.png';
import '../../scss/components/Home/HomeProducts.scss';
import SeeMore from '../utils/SeeMore';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from 'swiper';
import HomeRandomProductsHook from '../../customHooks/home-random-products-hook';
import ProductCard from '../Products/ProductCard';
import { TailSpin } from 'react-loader-spinner';
function HomeProducts() {
    const [randomProducts,loading] = HomeRandomProductsHook();
    return (
        <div className="home-products">
            <MainHeading title="our products" />
            <div className="container">
                {
                    !loading ? (
                        <>
                            <SeeMore pathText='products' />
                            <div className="products">
                                <Swiper
                                    slidesPerView={1}
                                    breakpoints={
                                        {
                                            // When screen width is 576px or less
                                            576: {
                                                slidesPerView: 2,
                                            },
                                            // When screen width is 768px or less
                                            768: {
                                                slidesPerView: 3,
                                            },
                                            // When screen width is 992px or less
                                            992: {
                                                slidesPerView: 4,
                                            },
                                        }
                                    }
                                    spaceBetween={30}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    {randomProducts ? (
                                        randomProducts.map((product, index) => {
                                            return (
                                                <SwiperSlide>
                                                    <ProductCard product={product} key={index} />
                                                </SwiperSlide>
                                            )
                                        })
                                    ) : null
                                    }
                                </Swiper>
                            </div>
                        </>
                    ) : <TailSpin
                        height="80"
                        width="80"
                        color="#FF431C"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: "center",
                        }}
                        wrapperClass=""
                        visible={true}
                    />
                }
            </div>
        </div>
    )
}

export default HomeProducts