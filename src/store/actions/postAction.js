import { setPosts, addPost, setPost } from "../reducers/postReducer";
import { Dispatch } from "redux";
import { PostApi } from "../../apis/services/post/postApi";
import { PostAction } from "../types/post";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const data = await PostApi.getAllPosts();
      dispatch(setPosts(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
export const setFetchPost = (postId) => {
  return async (dispatch) => {
    try {
      const data = await PostApi.getPost(postId);
      dispatch(setPost(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addFetchPost = (payload) => {
  return async (dispatch) => {
    try {
      const data = await PostApi.addPost(payload);
      dispatch(addPost(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
