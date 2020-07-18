import React, { useState, useEffect } from "react";

import NavBar from "../nav-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchRestoran } from "../../api/GitRestorApi";

function App() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      setMenu(await fetchRestoran());
    };
    fetchAPI();
  }, []);
  const restName = menu ? menu.data.restaurant.company.name : null;
  return (
    <Router>
      <NavBar title={restName}></NavBar>
      <Switch>
        <Route path="/info">
          <h2>Тут будет информация</h2>
        </Route>
        <Route path="/corzina">
          <h2>Тут будет корзина</h2>
        </Route>
        <Route path="/">
          <h2>Тут будет меню</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
