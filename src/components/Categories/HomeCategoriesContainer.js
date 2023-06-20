import React from 'react'
import CategoryCard from './CategoryCard'

function HomeCategoriesContainer({randomCategories}) {
  return (
      <div className="categories">
          {randomCategories.length ? (
              randomCategories.map((category, index) => {
                  return (
                      <CategoryCard category={category} key={index} />
                  )
              })
          ) : null}
      </div>
  )
}

export default HomeCategoriesContainer