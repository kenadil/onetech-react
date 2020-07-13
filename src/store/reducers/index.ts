import { ShoppingCartLine, AppState } from "../../types";
import { AppAction } from "../actions";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cart";

const calculatePrice = (cart: ShoppingCartLine[]) =>
    cart.reduce((total, item) =>
        total + item.product.price * item.count, 0
    );

const initialState = {
    catalog: [],
    shoppingCart: [],
    totalPrice: 0,
    quantity: 0,
}

export const rootReducer = (state: AppState = initialState, action: AppAction): AppState => {
    const { shoppingCart } = state;
    const { payload, type } = action;

    switch (type) {
        case ADD_PRODUCT: {
            const newShoppingCart = [...shoppingCart];

            let line = newShoppingCart.find(line => line.product === payload);
            if (!line) {
                line = {
                    product: payload,
                    count: 0,
                };
                line.count++;
                newShoppingCart.push(line);
            }
            else {
                line.count = payload.quantity;
            }

            return {
                ...state,
                shoppingCart: newShoppingCart,
                totalPrice: calculatePrice(newShoppingCart),
                quantity: line.count,
            };
        }
        case REMOVE_PRODUCT: {
            let newShoppingCart = [...shoppingCart];

            let line = newShoppingCart.find(line => line.product === payload);
            if (line) {
                newShoppingCart = newShoppingCart.filter((line) => line.product !== payload);
            }

            return {
                ...state,
                shoppingCart: newShoppingCart,
                totalPrice: calculatePrice(newShoppingCart),
                quantity: 0,
            };
        }
        default: return state;
    }
}