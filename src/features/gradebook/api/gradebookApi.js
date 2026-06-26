import api from "../../../api/axios";

export const getGradebooks = () =>
  api.get("/gradebook");

export const getGradebookById = (id) =>
  api.get(`/gradebook/${id}`);

export const createGradebook = (data) =>
  api.post("/gradebook", data);

export const updateGradebook = (id, data) =>
  api.put(`/gradebook/${id}`, data);

export const deleteGradebook = (id) =>
  api.delete(`/gradebook/${id}`);