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
import { Navigation, Pagination } from 'swiper';
function HomeProducts() {
    return (
        <div className="home-products">
            <MainHeading title="our products" />
            <div className="container">
                <SeeMore />
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
                        <SwiperSlide>
                            <div className="product-box">
                                <div className="image">
                                    <img src={cupsImage} alt="product-image" />
                                </div>
                                <div className="text">
                                    <div className="category">Kitchen</div>
                                    <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</div>
                                    <div className="title">Salad Spoon</div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide> <div className="product-box">
                            <div className="image">
                                <img src={lampImage} alt="product-image" />
                            </div>
                            <div className="text">
                                <div className="category">Kitchen</div>
                                <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</div>
                                <div className="title">Sieve</div>
                            </div>

                        </div>
                        </SwiperSlide>
                        <SwiperSlide>  <div className="product-box">
                            <div className="image">
                                <img src={cupsImage} alt="product-image" />
                            </div>
                            <div className="text">
                                <div className="category">Kitchen</div>
                                <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</div>
                                <div className="title">Sweet Shovel</div>
                            </div>

                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="product-box">
                            <div className="image">
                                <img src={cupsImage} alt="product-image" />
                            </div>
                            <div className="text">
                                <div className="category">Kitchen</div>
                                <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</div>
                                <div className="title">Sweet Shovel</div>
                            </div>

                        </div>
                        </SwiperSlide>
                        <SwiperSlide> <div className="product-box">
                            <div className="image">
                                <img src={cupsImage} alt="product-image" />
                            </div>
                            <div className="text">
                                <div className="category">Kitchen</div>
                                <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</div>
                                <div className="title">Sweet Shovel</div>
                            </div>

                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HomeProducts