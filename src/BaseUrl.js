import axios from "axios";

export const getbaseurl = axios.create({
  baseURL: "https://appideas.onrender.com/api",
});
export const postbaseurl = axios.create({
  method: "POST",
  baseURL: "https://appideas.onrender.com/api",
});

export default axios.defaults.baseURL = "https://appideas.onrender.com";
