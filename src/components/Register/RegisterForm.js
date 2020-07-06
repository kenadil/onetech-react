import React from "react";
import EmailItem from "../Inputs/RegisterInputs/Email/EmailItem";
import PasswordItem from "../Inputs/RegisterInputs/Password/PasswordItem";
import ButtonItem from "../Inputs/RegisterInputs/Button/ButtonItem";
import NameItem from "../Inputs/RegisterInputs/Name/NameItem";
import PasswordValidationItem from "../Inputs/RegisterInputs/Password/PasswordValidationItem";

const RegisterForm = ({ handleChange, handleBlur, values, touched, errors, handleSubmit, isSubmitting }) => {
    return (
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
            <ButtonItem isSubmitting={isSubmitting} />
        </form>
    )
}

export default RegisterForm;