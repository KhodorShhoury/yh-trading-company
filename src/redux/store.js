import { applyMiddleware,createStore } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
const initialValue = {};
const middleWare = [thunk];
const store = createStore(rootReducer,initialValue,applyMiddleware(...middleWare));
export default store;