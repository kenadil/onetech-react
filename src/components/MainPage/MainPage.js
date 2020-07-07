import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginFormik from "../Login/LoginFormik";
import RegisterFormik from "../Register/RegisterFormik";

const MainPage = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginFormik />
                </Route>
                <Route path="/register">
                    <RegisterFormik/>
                </Route>
                <Redirect to="/login"/>
            </Switch>
        </Router>
    )
}

export default MainPage;