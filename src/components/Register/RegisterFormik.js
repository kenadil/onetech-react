import React from "react";
import { Formik } from "formik";
import { validationSchemaReg } from "../../scripts/FormLayout/ValidationSchema/validationSchema";
import RegisterForm from "../Register/RegisterForm";

const RegisterFormik = () => {
    const [status, setStatus] = React.useState(0);
    const [message, setMessage] = React.useState("");
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                passwordvalidation: ""
            }}
            validationSchema={validationSchemaReg}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    console.log("Creating your account", JSON.stringify(values));
                    fetch("https://reqres.in/api/register", {
                        method: 'POST', headers: {
                            'Content-Type': 'application/json'
                        },
                        mode: 'cors',
                        body: JSON.stringify({ email: values.email, password: values.password }),
                    })
                        .then((response) => {
                            if (!response.ok) {
                                return response.text().then(text => {throw new Error(text)});
                            }
                            else return response.json();
                        })
                        .then((data) => {
                            setStatus(200);
                            setMessage("Registered successfully!");
                        })
                        .catch((error) => {
                            setStatus(400);
                            setMessage(error.toString());
                        })
                }, 2000);
            }}
        >
            {props => {
                const {
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                return (
                    <div className="RegisterFormik">
                        <RegisterForm
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            handleSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                            values={values}
                            errors={errors}
                            touched={touched}
                        />
                        <div className={status === 200 ? "message-container" : "error-container"}>
                            {isSubmitting ? "" : message}
                        </div>
                    </div>
                )
            }}
        </Formik>
    )
}

export default RegisterFormik;