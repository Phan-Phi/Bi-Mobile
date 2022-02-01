import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router";
import Home from "./components/Home/Home";
import ChiTiet from "./pages/ChiTiet/ChiTiet";
import DangKy from "./pages/DangKy/DangKy";
import DangNhap from "./pages/DangNhap/DangNhap";
import Detail from "./pages/Detail/Detail";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail/:id" detail exact Component={Detail} />
        <HomeTemplate path="/product/:id" detail exact Component={ChiTiet} />
        <HomeTemplate path="/login" detail exact Component={DangNhap} />
        <HomeTemplate path="/sign-up" detail exact Component={DangKy} />
      </Switch>
    </Router>
  );
}

export default App;
