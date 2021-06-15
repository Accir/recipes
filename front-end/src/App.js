import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Landing from "./components/Landing/Landing";
import { Router, Switch, Route } from "react-router-dom";
import history from "./services/navigation/history";
import {
  getHomePath,
  getLoginPath,
  getRegisterPath,
} from "./services/navigation/paths";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";

function App() {
  return (
    <div>
      <Router history={history}>
        <div className="content-wrapper">
          <Header />
          <Switch>
            <Route exact path={getHomePath()}>
              <Landing />
            </Route>
            <Route path={getLoginPath()}>
              <Login />
            </Route>
            <Route path={getRegisterPath()}>
              <Register />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
