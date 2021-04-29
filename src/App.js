import logo from './logo.svg';
import './App.css';
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
