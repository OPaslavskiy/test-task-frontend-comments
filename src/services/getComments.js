import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export async function getComments(setComments) {
  try {
    const response = await axios.get("/comments");
    const comments = await response?.data?.comments;
    setComments(comments);
  } catch (e) {
    console.log(e);
  }
}
