import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Bye } from "./pages/Bye";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <header>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/bye">Bye</Link>
            </li>
          </ul>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bye" component={Bye} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
