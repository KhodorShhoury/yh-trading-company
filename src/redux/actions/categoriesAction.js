import baseURL from "../../api/baseURL"
import {GET_ALL_CATEGORIES, GET_ERROR, GET_RANDOM_CATEGORIES} from '../types';
export const getAllCategories = () => async(dispatch) =>{
    try{
        //request the categories
        const response = await baseURL.get(`/api/categories`);
        console.log(response)
        dispatch({
            type : GET_ALL_CATEGORIES,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload : `Error ${e}`
        })
    }
}
export const getRandomCategories = () => async(dispatch) =>{
    try{
        //request the categories
        const response = await baseURL.get(`/api/random/categories`);
        dispatch({
            type: GET_RANDOM_CATEGORIES,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload : `Error ${e}`
        })
    }
}
export const getCategoriesOnPage = (pageNumber) => async(dispatch) =>{
    console.log(pageNumber)
    try{
        //request the categories
        const response = await baseURL.get(`/api/categories?page=${pageNumber}`);
        console.log(response)
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload : `Error ${e}`
        })
    }
}