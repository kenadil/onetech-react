import React from "react";
import { Form, Input } from "antd";
import { ErrorMessage } from "../../../../scripts/FormLayout/ErrorMessage/ErrorMessage";

const PasswordValidationItem = ({ handleChange, handleBlur, touched, errors }) => {
    return (
        <Form.Item
            label="Password confirmation"
            name="password-form"
            rules={[
                {
                    required: true,
                    message: 'Please input your password again!',
                },
            ]}>
            <Input.Password
                name="passwordvalidation"
                id="password-validation"
                placeholder="Confirm your password"
                onChange={handleChange}
                onBlur={handleBlur}
                visibilityToggle={false}
            />
            {errors.passwordvalidation && touched.passwordvalidation && (
                <ErrorMessage message={errors.passwordvalidation}/>
            )}
        </Form.Item>
    )
}

export default PasswordValidationItem;