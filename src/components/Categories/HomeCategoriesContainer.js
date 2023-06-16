import React from 'react'
import CategoryCard from './CategoryCard'

function HomeCategoriesContainer({randomCategories}) {
    console.log(randomCategories)
  return (
      <div className="categories">
          {randomCategories ? (
              randomCategories.map((category, index) => {
                  return (
                      <CategoryCard category={category} key={index} />
                  )
              })
          ) : <h1>Loading</h1>}
      </div>
  )
}

export default HomeCategoriesContainer