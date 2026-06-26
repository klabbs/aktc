import api from "../../../api/axios";

export const getClasses = () =>
  api.get("/classes");

export const getClassById = (id) =>
  api.get(`/classes/${id}`);

export const createClasses = (data) =>
  api.post("/classes", data);

export const updateClasses = (id, data) =>
  api.put(`/classes/${id}`, data);

export const deleteClasses = (id) =>
  api.delete(`/classes/${id}`);