import { combineReducers } from "redux";
import ProductsReducer from "./productsReducer";
import ProductDetailReducer from "./productDetailReducer";

const reducer = combineReducers({ ProductsReducer, ProductDetailReducer });

export default reducer;
