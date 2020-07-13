import React from "react";
import { ShoppingCartLine, ProductItem } from "../types";
import { AddProduct, RemoveProduct } from "../store/actions";
import { Row, Col, Input, Button, List } from "antd";
import { DataIndexes } from "./DataIndexes";

export interface CartProps {
    list: ShoppingCartLine[];
    totalPrice: number;
    setQuantity: (product: ProductItem) => AddProduct,
    removeProduct: (product: ProductItem) => RemoveProduct,
}

export const Cart: React.FC<CartProps> = (props) => {
    return (
        <>
            <h1>Cart</h1>
            <List
                header={<DataIndexes/>}
                locale={
                    {
                        emptyText: "Cart is empty"
                    }
                }
                footer={
                    <div style={
                        {
                            fontWeight: "bold", float: "right", position: "relative", bottom: "10px",
                        }
                    }>
                        Total: {props.totalPrice} USD
                    </div>
                }
                bordered
                dataSource={props.list}
                renderItem={item => (
                    <>
                        <Row gutter={[12, 12]} style={{marginBottom: "10px"}}>
                            <Col span={8} style={{ fontWeight: "bold", position: "relative", left: "20px" }}>
                                {item.product.name}
                            </Col>
                            <Col span={4}>
                                {item.product.price} USD
                            </Col>
                            <Col span={4}>
                                <Input
                                    style={{ width: "50%" }}
                                    type="text"
                                    name="cart"
                                    value={item.count}
                                    min={0}
                                    onChange={e => {
                                        if (e.target.value === "") {
                                            item.product.quantity = 0;
                                        }
                                        else {
                                            item.product.quantity = parseInt(e.target.value);
                                        }
                                        props.setQuantity(item.product);
                                    }}
                                />
                            </Col>
                            <Col span={4}>
                                {
                                    item.product.price * item.count
                                } USD
                        </Col>
                            <Col span={4}>
                                <Button
                                    onClick={() => props.removeProduct(item.product)}
                                >
                                    x
                            </Button>
                            </Col>
                        </Row>
                    </>
                )}
            />
        </>
    )
}

/*<div className="Cart">
            <h1>Cart</h1>
            <DataIndexes />
            <div style={{ marginBottom: "40px" }}>
            {props.list.map((line, index) => {
                return (
                    <Row gutter={[12, 12]} key={index}>
                        <Col span={8} style={{ fontWeight: "bold" }}>
                            {line.product.name}
                        </Col>
                        <Col span={4}>
                            {line.product.price} USD
                        </Col>
                        <Col span={4}>
                            <Input
                                style={{ width: "50%" }}
                                type="text"
                                name="cart"
                                value={line.count}
                                min={0}
                                onChange={e => {
                                    if (e.target.value === "") {
                                        line.product.quantity = 0;
                                    }
                                    else {
                                        line.product.quantity = parseInt(e.target.value);
                                    }
                                    props.setQuantity(line.product);
                                }}
                            />
                        </Col>
                        <Col span={4}>
                            {
                                line.product.price * line.count
                            } USD
                        </Col>
                        <Col span={4}>
                            <Button
                                onClick={() => props.removeProduct(line.product)}
                            >
                                x
                            </Button>
                        </Col>
                    </Row>
                );
            })}
            </div>
            <div style={
                {
                    fontWeight: "bold", float: "right", position: "relative", bottom: "20px"
                }
            }>
                Total: {props.totalPrice} USD
            </div>
        </div>*/