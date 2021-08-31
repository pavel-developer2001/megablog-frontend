import { PostAction, PostActionTypes, PostState } from "../types/post";

const initialState: PostState = {
  posts: {
    data: [],
  },
  post: [],
  loading: true,
};

export default function postsReducer(state = initialState, action: PostAction) {
  switch (action.type) {
    case PostActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case PostActionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts.data, action.payload],
      };
    case PostActionTypes.SET_POST:
      return {
        ...state,
        loading: false,
        //@ts-ignore
        post: [action.payload.data],
      };
    default:
      return state;
  }
}

export const setPosts = (payload: any[]) => ({
  type: PostActionTypes.SET_POSTS,
  payload,
});
export const addPost = (payload: any) => ({
  type: PostActionTypes.ADD_POST,
  payload,
});
export const setPost = (payload: any) => ({
  type: PostActionTypes.SET_POST,
  payload,
});
