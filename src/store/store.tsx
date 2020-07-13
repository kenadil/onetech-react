import { rootReducer } from "./reducers";
import { products } from "../services/products";
import { createStore } from "redux";

export const store = createStore(
    rootReducer, {
        catalog: products,
        shoppingCart: [],
        totalPrice: 0,
        quantity: 0
    }
);