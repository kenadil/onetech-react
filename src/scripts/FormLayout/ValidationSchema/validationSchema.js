import * as Yup from "yup";

export const validationSchemaLog = Yup.object().shape({
    email: Yup.string()
        .email().required("Email required."),
    password: Yup.string()
        .required("No password entered.")
        .min(6, "Password too short - should contain 6 characters at least.")
        //.matches(/(?=.*[0-9])/, "Password must contain a number")
    ,
});

export const validationSchemaReg = Yup.object().shape({
    email: Yup.string()
        .email().required("Email required."),
    password: Yup.string()
        .required("No password entered.")
        .min(6, "Password too short - should contain 6 characters at least.")
        //.matches(/(?=.*[0-9])/, "Password must contain a number")
    ,
    name: Yup.string()
        .required("Name required."),
    passwordvalidation: Yup.string()
        .when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Password doesn't match"
            )
        })
});