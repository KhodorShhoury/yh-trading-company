import React from 'react'

function CategoriesContainer({ allCategories }) {
    return (
        <div className="all-categories">
            <div className="container">
                <div className="categories">
                    {allCategories ? (
                        allCategories.map((category, i) => {
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
        </div>
    )
}

export default CategoriesContainer