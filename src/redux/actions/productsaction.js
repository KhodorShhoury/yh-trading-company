import baseURL from "../../api/baseURL"
import { GET_ALL_PRODUCTS, GET_RANDOM_PRODUCTS, GET_PRODUCTS_BY_CATEGORY, GET_SINGLE_PRODUCT,GET_ERROR } from "../types";

export const getAllProducts = () => async (dispatch) =>{
    try{
        const response = await baseURL.get('/api/products');
        dispatch({
            type : GET_ALL_PRODUCTS,
            payload : response,
            loading : true,
        })
    }catch(e){
        dispatch({
            type : GET_ERROR,
            payload : `Error ${e}`,
        })
    }
}
export const getRandomProducts = () => async (dispatch) =>{
    try{
        const response = await baseURL.get('/api/random/products');
        dispatch({
            type : GET_RANDOM_PRODUCTS,
            payload : response,
            loading: true,
        })
    }catch(e){
        dispatch({
            type : GET_ERROR,
            payload : `Error ${e}`,
        })
    }
}
export const getProductsBycategory = (categoryID) => async (dispatch) =>{
    console.log(categoryID)
    try{
        const response = await baseURL.get(`api/products?category_slug=${categoryID}`);
        dispatch({
            type : GET_PRODUCTS_BY_CATEGORY,
            payload : response,
            loading: true,
        })
    }catch(e){
        dispatch({
            type : GET_ERROR,
            payload : `Error ${e}`,
        })
    }
}
export const getSingleProduct = (productId) => async (dispatch) =>{
    try{
        const response = await baseURL.get(`api/products/${productId}`);
        dispatch({
            type : GET_SINGLE_PRODUCT,
            payload : response,
            loading: true,
        })
    }catch(e){
        dispatch({
            type : GET_ERROR,
            payload : `Error ${e}`,
        })
    }
}