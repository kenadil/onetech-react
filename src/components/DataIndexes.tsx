import React from "react";
import { Row, Col } from "antd";

export const DataIndexes = () => {
    return (
        <Row gutter={[12, 12]}>
            <Col span={8}>
                Product
            </Col>
            <Col span={4}>
                Price
            </Col>
            <Col span={4}>
                Quantity
            </Col>
            <Col span={4}>
                Total Price
            </Col>
            <Col span={4}/>
        </Row>
    )
}