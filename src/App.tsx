import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";

import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Header />
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/art' component={Article} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
