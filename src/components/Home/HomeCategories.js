import React from 'react';
import '../../scss/components/Home/HomeCategories.scss';
import MainHeading from '../utils/MainHeading';
import SeeMore from '../utils/SeeMore';
import HomeRandomCategoriesHook from '../../customHooks/home-random-categories-hook';
import HomeCategoriesContainer from '../Categories/HomeCategoriesContainer';
import { TailSpin } from 'react-loader-spinner';
function HomeCategories() {
  const [randomCategories, loading] = HomeRandomCategoriesHook();
  return (
    <section className="home-categories">
      <MainHeading title="Our Categories" />
      <div className="container">
      {
        !loading ? (
          <>
              <SeeMore pathText='categories' />
              <HomeCategoriesContainer randomCategories={randomCategories} />
          </>
          ) : <TailSpin
            height="80"
            width="80"
              color="#FF431C"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{
              width : '100%',
              display : 'flex',
              justifyContent : "center",
            }}
            wrapperClass=""
            visible={true}
          />
      }
       
      </div>
    </section>
  )
}

export default HomeCategories