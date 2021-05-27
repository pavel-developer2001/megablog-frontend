import { PostAction, PostActionTypes, PostState } from "../types/post";

const initialState: PostState = {
  posts: {
    data: [],
  },
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
