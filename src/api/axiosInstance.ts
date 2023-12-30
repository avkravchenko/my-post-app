import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  exclude: {
    query: false,
  },
});

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  adapter: cache.adapter,
});

export default instance;
