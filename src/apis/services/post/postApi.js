import BlogApi from "../../BlogApi";
export const PostApi = {
  async getAllPosts() {
    try {
      const data = await BlogApi.get("/posts/");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getPost(postId) {
    try {
      const data = await BlogApi.get("/posts/" + postId);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async addPost(payload) {
    try {
      const data = await BlogApi.post("/posts/addPost", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
