import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export async function getComments() {
  try {
    const response = await axios.get(`/comments`);
    const data = response.data;
    const jsonData = JSON.stringify(data, null, 2);
    console.log(jsonData);
    return jsonData;
  } catch (e) {
    console.log(e);
  }
}
