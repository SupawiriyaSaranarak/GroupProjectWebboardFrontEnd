import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContextProvider";

import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import LogInPage from "./pages/LogInPage";
import CreateTopicPage from "./pages/CreateTopicPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";

const privateRoutes = [
  // {
  //   path: "/",
  //   component: Home,
  // },
  // {
  //   path: "/profile",
  //   component: Profile,
  // },
];

const publicRoutes = [
  // {
  //   path: "/register",
  //   component: Auth,
  // },
  {
    path: "/",
    component: HomePage,
  },
];

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Switch>
      {isAuthenticated &&
        privateRoutes.map((el, index) => (
          <Route key={index} exact path={el.path} component={el.component} />
        ))}

      {!isAuthenticated &&
        publicRoutes.map((el, index) => (
          <Route key={index} exact path={el.path} component={el.component} />
        ))}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LogInPage} />
      <Route exact path="/create-topic" component={CreateTopicPage} />
      <Route exact path="/topic" component={TopicPage} />
      <Route exact path="/user" component={UserPage} />
      <Route exact path="/admin" component={AdminPage} />

      <Redirect to="/" />
    </Switch>
  );
}

export default App;
