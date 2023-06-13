import { GET_ALL_CATEGORIES, GET_ERROR, GET_RANDOM_CATEGORIES } from "../types";

const initialValue = {
    randomCategories : [],
    categories: [],
    loading: true,
};
const allCategoriesReducer = (state = initialValue,action)=>{
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories : action.payload,
                loading :false,
            }
        case GET_RANDOM_CATEGORIES:
            return {
                ...state,
                randomCategories : action.payload,
                loading :false,
            }
        case GET_ERROR:
            return {
                loading: true,
                categories: action.payload,
            }
        default: return state
    }
}
export default allCategoriesReducer;