import { setPosts } from "../reducers/postReducer";

export const fetchPosts = () => {
	return async (dispatch) => {
		try {
			const responce = await fetch("http://localhost:5000/api/posts");
			const json = await responce.json();
			dispatch(setPosts(json));
		} catch (e) {
			console.log(e.message);
		}
	};
};
