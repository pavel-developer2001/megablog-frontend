import { PostState } from "../types/post";
import postReducer from "./postReducer";
import { addPost } from "./postReducer";
import configureStore from "redux-mock-store";

const initialState: PostState = {
	posts: {
		data: [],
	},
	loading: true,
};

const mockStore = configureStore();
let store, wrapper;

it("added new post", () => {
	store = mockStore(initialState);
	const data = {
		countLike: 0,
		createdAt: "2021-05-22T07:23:23.388Z",
		id: 21,
		postText: "tttt",
		postTitle: "tttt",
		updatedAt: "2021-05-22T07:23:23.388Z",
		userId: 1,
	};
	let action = addPost(data);

	let newState = postReducer(initialState, action);
	expect(newState.posts.length).toBe(1);
});
