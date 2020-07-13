import React from "react";
import { Row, Col, } from "antd";
import Cart from "./Cart";
import Catalog from "./Catalog";

export const MainPage = () => {
    return (
        <div className="MainPage">
            <Row justify="space-around" align="middle">
                <Col span={20}>
                    <Cart/>
                </Col>
            </Row>
            <Row justify="space-around" align="middle">
                <Col span={20}>
                    <Catalog/>
                </Col>
            </Row>
        </div>
    )
}