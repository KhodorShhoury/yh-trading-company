import React from 'react'
import cupsImage from '../../assets/imgs/cups.png';
import blanketImage from '../../assets/imgs/blanket.png';
import lampStandImage from '../../assets/imgs/lamp-stand.png';
import '../../scss/components/Home/HomeCategories.scss';
import MainHeading from '../utils/MainHeading';
import SeeMore from '../utils/SeeMore';
import HomeRandomCategoriesHook from '../../customHooks/home-random-categories-hook';
function HomeCategories() {
  const [randomCategories] = HomeRandomCategoriesHook();
  return (
    <section className="home-categories">
    <MainHeading title= "Our Categories"/>
    <div className="container">
    <SeeMore pathText= 'categories'/>
      <div className="categories">
          {randomCategories ? (
            randomCategories.map((category,i)=>{
          return (
            <div className="category-box">
              <div className="text">
                <div className="category-title">{category.title}</div>
                <div className="category-description">{category.slogan}</div>
              </div>
              <div className="image">
                <img src={category.media[0].original_url} alt="" />
              </div>
            </div>
          )
        })
      ) : <h1>Loading</h1>}
      </div>
    </div>
    </section>
  )
}

export default HomeCategories