import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import usersReducer from "./reducers/userReducer";
import postsReducer from "./reducers/postReducer";
import settingsReducer from "./reducers/settingsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	users: usersReducer,
	posts: postsReducer,
	settings: settingsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
export default store;
