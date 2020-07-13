import { AppState, ProductItem } from "../types";
import { Dispatch } from "redux";
import { AppAction, AddProduct, addProduct, RemoveProduct, removeProduct } from "../store/actions";
import { Catalog } from "../components/Catalog";
import { connect } from "react-redux";

export const mapStateToProps = (state: AppState) => {
    return {
        catalog: state.catalog,
        shoppingCart: state.shoppingCart,
    };
}

export const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
    return {
        addProduct: (product: ProductItem): AddProduct => dispatch(addProduct(product)),
        removeProduct: (product: ProductItem): RemoveProduct => dispatch(removeProduct(product)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);