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
};
