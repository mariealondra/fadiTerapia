import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://10.0.0.6:3001/",
});

export default clienteAxios;
