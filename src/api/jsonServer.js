import axios from "axios";

const jsonServerApi = axios.create({ baseURL: "http://localhost:3004" });

export default jsonServerApi;
