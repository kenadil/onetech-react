import React from "react";
import { ProductItem } from "../types";
import { Card, Button } from "antd";
import Meta from "antd/lib/card/Meta";

export interface ProductProps {
    item: ProductItem;
    onClick: () => void;
    button: string;
}

export const Product: React.FC<ProductProps> = (props) => {
    return (
        <Card
            hoverable
            cover={<img src={props.item.image} style={{height: "171.28px"}} alt="" />}
            title={<h3>{props.item.name}</h3>}
        >
            <Meta
                title={
                    <>
                        <span>{props.item.price} USD</span>
                        <Button style={{ float: "right" }} onClick={props.onClick}>{props.button}</Button>
                    </>
                }
            />
        </Card>
    )
}