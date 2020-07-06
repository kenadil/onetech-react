import React from "react";
import { Form, Input } from "antd";
import { ErrorMessage as Message } from "../../../../scripts/FormLayout/ErrorMessage/ErrorMessage";

const NameItem = ({ handleChange, handleBlur, errors, touched }) => {
    return (
        <Form.Item
            label="Name"
            name="name-form"
            rules={[
                {
                    required: true,
                    message: 'Please input your first name!',
                },
            ]}
        >
            <Input
                name="name"
                id="name"
                placeholder="Enter your first name"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.name && touched.name && (
                <Message message={errors.name}/>
            )}
        </Form.Item>
    )
}

export default NameItem;