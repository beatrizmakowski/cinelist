import axios from "axios";

export const api = axios.create({
  baseURL: "https://cinelist-api98.herokuapp.com",
});
