import React from "react";
import {Button, Form} from "antd";

const ButtonItem = ({isSubmitting}) => {
    return (
        <Form.Item
        >
            <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                Login
            </Button>
        </Form.Item>
    )
}

export default ButtonItem;