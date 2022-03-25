import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBar } from "components";
import { Home, Login } from "pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
