import React from "react";
import EmailItem from "../Inputs/LoginInputs/Email/EmailItem";
import PasswordItem from "../Inputs/LoginInputs/Password/PasswordItem";
import ButtonItem from "../Inputs/LoginInputs/Button/ButtonItem";

const LoginForm = ({ handleChange, handleBlur, values, touched, errors, handleSubmit, isSubmitting }) => {
    return (
        <form
            onSubmit={handleSubmit}
        >
            <EmailItem
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
            />
            <PasswordItem
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched}
                errors={errors}
            />
            <ButtonItem isSubmitting={isSubmitting} />
        </form>
    )
}

export default LoginForm;