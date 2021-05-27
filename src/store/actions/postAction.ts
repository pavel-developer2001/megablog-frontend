import { setPosts } from "../reducers/postReducer";
import { Dispatch } from "redux";
import { PostAction } from "../types/post";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const responce = await fetch("http://localhost:5000/api/posts");
      const json = await responce.json();
      dispatch(setPosts(json));
    } catch (e) {
      console.log(e.message);
    }
  };
};
