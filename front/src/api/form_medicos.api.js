import axios from "axios";

const URL = "http://localhost:8000";  /* URL predeterminada del servidor local de desarrollo. */

console.log(URL);
const medicosApi = axios.create({
  baseURL: `${URL}/api/medicos/`,
});

export const getAllMedicos = () => medicosApi.get("/"); /* trae de vuelta todos */

export const getMedicos = (id) => medicosApi.get(`/${id}`);  /* consultar */

export const createMedicos = (medicos) => medicosApi.post("/", medicos);  /* insertar */

export const updateMedicos = (id, medicos) => medicosApi.put(`/${id}/`, medicos); /* actualizar */

export const deleteMedicos = (id) => medicosApi.delete(`/${id}`);  /* eliminar */

