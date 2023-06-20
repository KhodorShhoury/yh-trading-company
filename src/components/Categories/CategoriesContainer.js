import React from 'react'
import CategoryCard from './CategoryCard'
import '../../scss/components/Categories/CategoriesContainer.scss';
import { TailSpin } from 'react-loader-spinner';
import NoProducts from '../utils/NoProducts';
function CategoriesContainer({ allCategories ,loading}) {
    return (
        <div className="all-categories">
            <div className="container">
            {
                !loading ? (
                    <div className="categories">
                            {allCategories.data.length ?
                                allCategories.data.map((category, index) => {
                                return (
                                    <CategoryCard category={category} key={index} />
                                )
                            }) : <NoProducts title= "categories"/>}
                    </div>
                    ) : <TailSpin
                        height="80"
                        width="80"
                        color="#FF431C"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{
                            width: '100%',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                        }}
                        wrapperClass=""
                        visible={true}
                    />
            }

            </div>
        </div>
    )
}

export default CategoriesContainer