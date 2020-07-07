import React from "react";
import EmailItem from "../Inputs/RegisterInputs/Email/EmailItem";
import PasswordItem from "../Inputs/RegisterInputs/Password/PasswordItem";
import ButtonItem from "../Inputs/RegisterInputs/Button/ButtonItem";
import NameItem from "../Inputs/RegisterInputs/Name/NameItem";
import PasswordValidationItem from "../Inputs/RegisterInputs/Password/PasswordValidationItem";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const RegisterForm = ({ handleChange, handleBlur, values, touched, errors, handleSubmit, isSubmitting }) => {
    const history = useHistory();

    const changePage = () => {
        history.push("/login");
    }
    return (
        <div className="RegisterForm">
            <h1 className="header">Registration</h1>
            <form
                onSubmit={handleSubmit}
            >
                <NameItem
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                />
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
                <PasswordValidationItem
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                />
                <div className="row-container">
                    <ButtonItem isSubmitting={isSubmitting} />
                    <Button type="primary" htmlType="submit" onClick={changePage} className="route-btn">
                        Cancel
                </Button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;