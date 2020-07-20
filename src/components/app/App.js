import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchRestoran } from "../../api/GitRestorApi";

import NavBar from "../nav-bar";
import ListsContainer from "../lists-container";

function App() {
	const [menu, setMenu] = useState();
	useEffect(() => {
		const fetchAPI = async () => {
			setMenu(await fetchRestoran());
		};
		fetchAPI();
	}, []);
	const restName = menu ? menu.data.restaurant.company.name : null;
	const restMenus = menu ? menu.data.restaurant.menu.categories : null;
	console.log(restMenus);
	return (
		<Router>
			<NavBar title={restName}></NavBar>
			<Switch>
				<Route path="/info" exact>
					<h2>123456789</h2>
				</Route>
				<Route path="/corzina" exact>
					<h2>Тут будет корзина</h2>
				</Route>
				<Route path="/" exact >
					<ListsContainer restMenus={restMenus} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
