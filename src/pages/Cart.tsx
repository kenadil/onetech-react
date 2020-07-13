import {connect} from "react-redux";
import { AppState, ProductItem } from "../types";
import { Dispatch } from "redux";
import { AppAction, AddProduct, addProduct, RemoveProduct, removeProduct } from "../store/actions";
import { Cart } from "../components/Cart";

export const mapStateToProps = (state: AppState) => {
    return {
        list: state.shoppingCart,
        totalPrice: state.totalPrice,
    };
}

export const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
    return {
        setQuantity: (product: ProductItem): AddProduct => dispatch(addProduct(product)),
        removeProduct: (product: ProductItem): RemoveProduct => dispatch(removeProduct(product)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);