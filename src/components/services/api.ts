import axios from "axios";

const API = axios.create({
  baseURL: "https://discot.inskysolutions.com:8007/api",
});

export default API;
