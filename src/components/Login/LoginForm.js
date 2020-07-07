import React from "react";
import EmailItem from "../Inputs/LoginInputs/Email/EmailItem";
import PasswordItem from "../Inputs/LoginInputs/Password/PasswordItem";
import ButtonItem from "../Inputs/LoginInputs/Button/ButtonItem";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const LoginForm = ({ handleChange, handleBlur, values, touched, errors, handleSubmit, isSubmitting }) => {

    const history = useHistory();

    const changePage = () => {
        history.push("/register");
    }
    return (
        <div className="LoginForm">
            <h1 className="header">Login</h1>
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
                <div className="row-container">
                    <ButtonItem isSubmitting={isSubmitting} />
                    <Button type="primary" htmlType="submit" onClick={changePage} className="route-btn">
                        Registration
                </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;