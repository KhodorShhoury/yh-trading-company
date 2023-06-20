import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomCategories } from '../redux/actions/categoriesAction';
import { useState } from 'react';

function HomeRandomCategoriesHook() {
    const dispatch = useDispatch();
  const [initializeLoading, setIntializeLoading] = useState(true);
    useEffect(()=>{
        dispatch(getRandomCategories())
          .then(() => setIntializeLoading(false));
    },[])
    const categories = useSelector(state => state.allCategories.randomCategories);
  const loading = useSelector(state => state.allCategories.loading);
    let randomCategories = [];
    try{
      if (categories) {
        if (categories.data) {
          randomCategories = categories.data
        }
      }
    }catch (e){}

  return [randomCategories,loading || initializeLoading]
}

export default HomeRandomCategoriesHook;