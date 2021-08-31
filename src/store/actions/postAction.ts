import { setPosts, addPost, setPost } from "../reducers/postReducer";
import { Dispatch } from "redux";
import { PostApi } from "../../apis/services/post/postApi";
import { PostAction } from "../types/post";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const data = await PostApi.getAllPosts();
      dispatch(setPosts(data));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
export const setFetchPost = (postId: any) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const data = await PostApi.getPost(postId);
      dispatch(setPost(data));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const addFetchPost = (payload: any) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const data = await PostApi.addPost(payload);
      dispatch(addPost(data));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
