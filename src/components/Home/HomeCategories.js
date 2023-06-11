import React from 'react'
import cupsImage from '../../assets/imgs/cups.png';
import blanketImage from '../../assets/imgs/blanket.png';
import lampStandImage from '../../assets/imgs/lamp-stand.png';
import '../../scss/components/Home/HomeCategories.scss';
import MainHeading from '../utils/MainHeading';
import SeeMore from '../utils/SeeMore';
function HomeCategories() {
  return (
    <section className="home-categories">
    <MainHeading title= "Categories"/>
    <div className="container">
    <SeeMore/>
      <div className="categories">
        <div className="category-box">
        <div className="text">
              <div className="category-title">Kitchen</div>
              <div className="category-description">Discover Our New Tools</div>
        </div>
        <div className="image">
          <img src= {lampStandImage} alt="" />
        </div>
        </div>
        <div className="category-box">
        <div className="text">
              <div className="category-title">Kitchen</div>
              <div className="category-description">Discover Our New Tools</div>
        </div>
        <div className="image">
          <img src= {cupsImage} alt="" />
        </div>
        </div>
        <div className="category-box">
        <div className="text">
              <div className="category-title">Kitchen</div>
              <div className="category-description">Discover Our New Tools</div>
        </div>
        <div className="image">
          <img src= {blanketImage} alt="" />
        </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default HomeCategories