import baseURL from "../../api/baseURL"
import { GET_ALL_PRODUCTS, GET_ERROR } from "../types";

export const getAllProducts = () => async (dispatch) =>{
    try{
        const response = await baseURL.get('/api/products');
        dispatch({
            type : GET_ALL_PRODUCTS,
            payload : response
        })
    }catch(e){
        dispatch({
            type : GET_ERROR,
            payload : `Error ${e}`,
        })
    }
}