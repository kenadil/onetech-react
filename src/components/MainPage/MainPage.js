import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginFormik from "../Login/LoginFormik";
import RegisterFormik from "../Register/RegisterFormik";

const MainPage = () => {
    return (
        <Router>
            <div className="Header">
                Header
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login Form</Link>
                        </li>
                        <li>
                            <Link to="/register">Register Form</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/login">
                    <LoginFormik />
                </Route>
                <Route path="/register">
                    <RegisterFormik/>
                </Route>
            </Switch>
        </Router>
    )
}

export default MainPage;