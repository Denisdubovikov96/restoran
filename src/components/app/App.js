import React from "react";

import NavBar from "../nav-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/">

        </Route>
        <Route path="/info">
          
        </Route>
        <Route path="/corzina">
          
        </Route>
      </Switch>
    </Router>
      

  );
}

export default App;
