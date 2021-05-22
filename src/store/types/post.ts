type IData = {
	countLike: number;
	createdAt: string;
	id: number;
	postText: string;
	postTitle: string;
	updatedAt: string;
	userId: number;
};
type data<IData> = [];
export type PostState = {
	//@ts-ignore
	posts: data;
	loading: boolean;
};
export enum PostActionTypes {
	SET_POSTS = "SET_POSTS",
	ADD_POST = "ADD_POST",
}

export type SetPostsAction = {
	type: PostActionTypes.SET_POSTS;
	payload: any[];
};
export type AddPostAction = {
	type: PostActionTypes.ADD_POST;
	payload: any;
};

export type PostAction = SetPostsAction | AddPostAction;
