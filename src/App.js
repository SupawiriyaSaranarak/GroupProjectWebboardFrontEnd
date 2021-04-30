import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
