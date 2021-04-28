import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddArticle from "./pages/AddArticle";

import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/user' component={Profile} />
					<Route exact path='/add' component={AddArticle} />
					<Route exact path='/art' component={Article} />
					<Route exact path='/register' component={Register} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
