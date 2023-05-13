import axios from "axios";

const baseURL = "http://localhost:3000/api/";

export default async function getPost(id) {
  try {
    const response = await axios.get(`${baseURL}posts`);
    const posts = response.data;

    if (id) {
      return posts.find((value) => value.id == id);
    }

    return posts;
  } catch (error) {
    console.log(error);
    return null;
  }
}
