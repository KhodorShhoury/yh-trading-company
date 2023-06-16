import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../scss/components/Categories/CategoryCard.scss';
function CategoryCard({category}) {
  return (
    <>
      <NavLink to={`/categories/${category.slug}`} className="category-box">
              <div >
                  <div className="text">
                      <div className="category-title">{category.title}</div>
                      <div className="category-description">{category.slogan}</div>
                  </div>
                  <div className="image">
                      <img src={category.image} alt="" />
                  </div>
              </div>
          </NavLink>
    </>
  )
}

export default CategoryCard