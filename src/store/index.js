import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import usersReducer from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	users: usersReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
export default store;
