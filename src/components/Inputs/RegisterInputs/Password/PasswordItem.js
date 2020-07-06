import React from "react";
import { Form, Input } from "antd";
import { ErrorMessage } from "../../../../scripts/FormLayout/ErrorMessage/ErrorMessage";

const PasswordItem = ({ handleChange, handleBlur, touched, errors }) => {
    return (
        <Form.Item
            label="Password"
            name="password-form"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}>
            <Input.Password
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}

            />
            {errors.password && touched.password && (
                <ErrorMessage message={errors.password}/>
            )}
        </Form.Item>
    )
}

export default PasswordItem;