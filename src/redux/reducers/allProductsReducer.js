import { GET_ALL_PRODUCTS, GET_ERROR } from "../types";
const initialValue = {
    randomProducts: [],
    products: [],
    loading: true,
};
const allProductsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
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