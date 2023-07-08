import React from 'react'
import '../../scss/components/utils/Footer.scss';
import logo from '../../assets/imgs/yh-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import FooterCategoriesHook from '../../customHooks/Footer-categories-hook';
import { NavLink } from 'react-router-dom';
function Footer() {
    const [allCategories, loading] = FooterCategoriesHook();
    return (
        <footer class="footer">
            <div class="container">
                <div className="top">
                    <div className="boxes">
                        <div className="box about">
                            <h3 className='title'>About</h3>
                            <p>Can i tie the world with YH Tranding? Or what's even YH Trading? It's a reliable partner in cargo transportation whether as containers, small to oversized shipments, all the way from Iran. And since we understand the importance of safe and timely delivery for your products, we've been the priority for our clients for many years. Whether you're a small business owner or a multinational corporation, you're welcome from YH Trading, were you'll experience the different.</p>
                        </div>
                        <div className="box categories">
                            <h3 className="title">Categories</h3>
                            <ul>
                                {!loading &&
                                    allCategories ? (
                                    allCategories.map((category, index) => {
                                        return <li><NavLink to={`/categories/${category.slug}`}>{category.title} <FontAwesomeIcon icon={faArrowRight} /></NavLink></li>
                                    })
                                ) : null
                                }
                            </ul>
                        </div>
                        <div className="box quick-links">
                            <h3 className='title'>Quick Links</h3>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Categories</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact US</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="copy-right">
                        Copyright © 2023 All Rights Reserved by yh-trading-company.
                    </div>
                    <div className="socials">
                        <a href="https://www.facebook.com/YH-Trading-109589635492109/">
                            <div className="icon">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                        </a>
                        <a href="https://instagram.com/yh_trading?igshid=MzRlODBiNWFlZA==">
                            <div className="icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </a>
                        <a href="https://www.tiktok.com/@yh_trading?_t=8dBZElVLG9i&_r=1">
                            <div className="icon">
                                <FontAwesomeIcon icon={faTiktok} />
                            </div>
                        </a>
                        <a href="https://wa.me/9613083785">
                            <div className="icon">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer