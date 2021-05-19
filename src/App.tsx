import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchUsers } from "./store/actions/userAction";

import Home from "./pages/Home";
import Article from "./pages/Article";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddArticle from "./pages/AddArticle";

import Header from "./components/Header";
import "./App.css";
import { setToken } from "./store/reducers/userReducer";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
	const dispatch = useDispatch();

	const { token } = useTypedSelector((state) => state.users);

	React.useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	React.useEffect(() => {
		//@ts-ignore
		dispatch(setToken(localStorage.getItem("token")));
	}, [token]);

	return (
		<div className='App'>
			<Router>
				<Header />

				{token ? (
					<>
						<Switch>
							<Route
								path='/user/:id'
								render={({ match }) => {
									const { id } = match.params;
									return <Profile userId={id} />;
								}}
							/>
							<Route exact path='/' component={Home} />
							<Route exact path='/add' component={AddArticle} />
							<Route
								exact
								path='/posts/:id'
								render={({ match }) => {
									const { id } = match.params;
									return <Article postId={id} />;
								}}
							/>
							<Redirect to='/' />
						</Switch>
					</>
				) : (
					<>
						<Switch>
							<Route exact path='/register' component={Register} />
							<Redirect to='/register' />
						</Switch>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
