import api from "../../../api/axios";

export const getCourseBatches = () =>
  api.get("/coursebatches");

export const getCourseBatchById = (id) =>
  api.get(`/coursebatches/${id}`);

export const createCoursebatches = (data) =>
  api.post("/auth/register", data);

export const updateCoursebatches = (id, data) =>
  api.put(`/Coursebatche/${id}`, data);

export const deleteCoursebatches = (id) =>
  api.delete(`/coursebatches/${id}`);