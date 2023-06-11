import React from 'react'
import '../../scss/components/Home/HeroSection.scss';
import toolsImage from '../../assets/imgs/34958.png';
function HeroSection() {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="left-side">
                    <div className="text">
                        <h2 className='title'>
                            Elevate Your Home with <span>Exquisite</span> Goods
                        </h2>
                        <p className='description'>Transform the ambiance of your kitchen with the opulent charm of sumptuous velvet kitchen tools, elevating your decor to unparalleled levels of sophistication and style.</p>
                    </div>
                    <div className="links">
                    <div className='link shop-now'>
                            <a href="#">shop now</a>
                    </div>
                        
                    </div>
                </div>
                <div className="right-side">
                <div className="image">
                        <img src={toolsImage} alt="" />
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default HeroSection