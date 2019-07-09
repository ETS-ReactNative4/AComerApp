import axios from "axios";

var api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://acomerapp.cl/"
      : "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
