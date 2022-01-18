import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router";
import Home from "./components/Home/Home";
import Detail from "./pages/Detail/Detail";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail/:id" detail exact Component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
