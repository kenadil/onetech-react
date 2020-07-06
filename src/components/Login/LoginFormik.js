import React from "react";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import { validationSchemaLog } from "../../scripts/FormLayout/ValidationSchema/validationSchema";
import postData from "../../scripts/PostData/postData";

const LoginFormik = () => {
    const [status, setStatus] = React.useState("");
    const [message, setMessage] = React.useState("");
    return (
        <Formik
            initialValues={{ 
                email: "",
                password: ""
            }}
            validationSchema={validationSchemaLog}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    console.log("Logging in", JSON.stringify(values));
                    postData("https://reqres.in/api/login", values)
                        .then(data => {
                            setStatus(data);
                            data===200 ? setMessage("Logged in.") : setMessage("Invalid email or password") 
                        }
                        );
                }, 2000);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                return (
                    <div className="LoginFormik">
                        <LoginForm
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            handleSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                            values={values}
                            errors={errors}
                            touched={touched}
                        />
                        <div className={status===200 ? "message-container" : "error-container"}>
                            {isSubmitting ? "" : message}
                        </div>
                    </div>
                )
            }}
        </Formik>
    )
}

export default LoginFormik;