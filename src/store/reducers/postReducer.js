const SET_POSTS = "SET_POSTS";
const ADD_POST = "ADD_POST";

const initialState = {
	posts: [],
};
export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case SET_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		case ADD_POST:
			return console.log({
				...state,
				posts: [...state.posts, action.payload],
			});
		default:
			return state;
	}
}

export const setPosts = (payload) => ({ type: SET_POSTS, payload });
export const addPost = (payload) => ({ type: ADD_POST, payload });