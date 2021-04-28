import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";
import Register from "./pages/Register";

import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/art' component={Article} />
					<Route exact path='/register' component={Register} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
