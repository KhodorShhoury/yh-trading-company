import { GET_ALL_PRODUCTS, GET_RANDOM_PRODUCTS, GET_PRODUCTS_BY_CATEGORY, GET_ERROR, GET_SINGLE_PRODUCT } from "../types";
const initialValue = {
    randomProducts: [],
    products: [],
    product: [],
    productsByCategory: [],
    loading: true,
};
const allProductsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case GET_RANDOM_PRODUCTS:
            return {
                ...state,
                randomProducts: action.payload,
                loading: false,
            }
        case GET_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                productsByCategory: action.payload,
                loading: false,
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                categories: action.payload,
            }
        default: return state;
    }
    
}
export default allProductsReducer;