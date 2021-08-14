import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/page/Home";
import AddUser from "./component/users/Create";
import Details from "./component/users/Details";
import ErrorPage from "./component/ErrorPage";
import Navbar from "./component/page/Navbar";
import { GlobalProvider } from "./component/context/GlobalState";
import EditUser from "./component/users/EditUser";
function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar title="CRUD" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/edit/:id" component={EditUser} />
          <Route exact path="/details/:id" component={Details} />
          <Route component={ErrorPage} />
        </Switch>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
