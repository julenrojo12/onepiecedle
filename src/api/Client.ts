import axios from "axios";

const client = axios.create({
  baseURL: "https://api.api-onepiece.com/v2", // API externa
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;