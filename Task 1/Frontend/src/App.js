import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Auth from "./components/Auth/Auth";
import CompanyList from "./components/CompanyList/CompanyList";
import CompanyDetail from "./components/CompanyDetail/CompanyDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Auth} />
        </Switch>
        <Switch>
          <Route path="/companies" component={CompanyList} />
        </Switch>
        <Switch>
          <Route path="/companyDetail:id" component={CompanyDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
