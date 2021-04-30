const SET_USERS = "SET_USERS";
const SET_AUTHOR = "SET_AUTHOR ";

const initialState = {
	users: [],
};
export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.payload,
			};
		case SET_AUTHOR:
			return {
				...state,
				users: [...state.users, action.payload],
			};
		default:
			return state;
	}
}

export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const setAuthor = (payload) => ({ type: SET_AUTHOR, payload });
