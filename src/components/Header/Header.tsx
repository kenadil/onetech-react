import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Projects from "../Projects/Projects";

const Header = () => {
  return (
    <Router>
      <div className="Header">
        Header
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
