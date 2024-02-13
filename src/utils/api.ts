import axios, { AxiosInstance } from "axios";
import { config } from "./config";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: config.API_URL,
  params: {
    api_key: config.API_KEY,
    rating: "g",
    lang: "en",
  },
});

export default axiosInstance;
