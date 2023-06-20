import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export async function getComments() {
  try {
    const response = await axios.get(`/comments`);
    const data = response.data;
    const comments = data.comments;

    return comments;
  } catch (e) {
    console.log(e);
  }
}
