import React from "react";
import { ProductItem, ShoppingCartLine } from "../types";
import { AddProduct, RemoveProduct } from "../store/actions";
import { Product } from "./Product";
import { List, } from "antd";

export interface CatalogProps {
    catalog: ProductItem[];
    shoppingCart: ShoppingCartLine[];
    addProduct: (product: ProductItem) => AddProduct;
    removeProduct: (product: ProductItem) => RemoveProduct;
}

export const Catalog: React.FC<CatalogProps> = (props) => {
    const isInCart = (item: ProductItem): boolean => {
        return !!props.shoppingCart.find((line) => line.product === item);
    }

    return (
        <div className="Catalog">
            <List
                header={<h1>Products</h1>}
                grid={{ gutter: 16, column: 4 }}
                dataSource={props.catalog}
                renderItem={(item: ProductItem) => (
                    <List.Item>
                        <Product 
                            item={item}
                            onClick={() => {
                                !isInCart(item) ? props.addProduct(item) : props.removeProduct(item);
                            }}
                            button={
                                !isInCart(item) ? "Add to Cart" : "Remove from Cart"
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}