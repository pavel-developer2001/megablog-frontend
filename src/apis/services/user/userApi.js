import BlogApi from "../../BlogApi";
export const UserApi = {
  async getAllUsers() {
    try {
      const data = await BlogApi.get("/user/");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getUser(userId) {
    try {
      const data = await BlogApi.get("/user/" + userId);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async registerUser(payload) {
    try {
      const data = await BlogApi.post("/user/register", payload);
      window.localStorage.setItem("token", data.data.token);
      window.localStorage.setItem("user", JSON.stringify(data.data.data));
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async loginUser(payload) {
    try {
      const data = await BlogApi.post("/user/login", payload);
      window.localStorage.setItem("token", data.data.token);
      window.localStorage.setItem("user", JSON.stringify(data.data.data));
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
