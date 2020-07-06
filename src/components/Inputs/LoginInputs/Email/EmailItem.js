import React from "react";
import { Form, Input } from "antd";
import { ErrorMessage as Message } from "../../../../scripts/FormLayout/ErrorMessage/ErrorMessage";

const EmailItem = ({ handleChange, handleBlur, touched, errors }) => {
    return (
        <Form.Item
            label="Email"
            name="email-form"
            rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
            ]}
        >
            <Input
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.email && touched.email && (
                <Message message={errors.email}/>
            )}
        </Form.Item>
    )
}

export default EmailItem;