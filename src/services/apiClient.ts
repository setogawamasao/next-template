import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 60 * 1000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export { client };
