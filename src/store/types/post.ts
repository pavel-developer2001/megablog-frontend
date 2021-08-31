type IData = {
  countLike: number;
  createdAt: string;
  id: number;
  postText: string;
  postTitle: string;
  updatedAt: string;
  userId: number;
};
export type PostState = {
  posts: {
    data: IData[];
  };
  post: any;
  loading: boolean;
};
export enum PostActionTypes {
  SET_POSTS = "SET_POSTS",
  ADD_POST = "ADD_POST",
  SET_POST = "SET_POST",
}

export type SetPostsAction = {
  type: PostActionTypes.SET_POSTS;
  payload: any[];
};
export type AddPostAction = {
  type: PostActionTypes.ADD_POST;
  payload: any;
};
export type SetPostAction = {
  type: PostActionTypes.SET_POST;
  payload: any[];
};

export type PostAction = SetPostsAction | AddPostAction | SetPostAction;
