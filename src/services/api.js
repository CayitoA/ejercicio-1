// Importar 
import axios from "axios";


const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
});

// obtener posts
export const getPosts = async () => {

  try {
    const response = await apiClient.get("/posts");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};
