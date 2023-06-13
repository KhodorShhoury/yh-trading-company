import { combineReducers } from "redux";
import allCategoriesReducer from "./allCategoriesReducer";
import allProductsReducer from "./allProductsReducer";

const rootReducer = combineReducers({
    allCategories : allCategoriesReducer,
    allProducts : allProductsReducer,
})
export default rootReducer;