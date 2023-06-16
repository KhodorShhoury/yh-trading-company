import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomCategories } from '../redux/actions/categoriesAction';

function HomeRandomCategoriesHook() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRandomCategories())
    },[])
    const categories = useSelector(state => state.allCategories.randomCategories);
  const loading = useSelector(state => state.allCategories.loading);
    let randomCategories = [];
    if(categories){
      if(categories.data){
        randomCategories = categories.data.data.categories.data
      }
    }
  return [randomCategories,loading]
}

export default HomeRandomCategoriesHook;