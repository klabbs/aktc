import api from "../../../api/axios";

export const getAll = () =>
  api.get("/courseBatches");

export const getById = (id) =>
  api.get(`/courseBatches/${id}`);

export const createData = (data) =>
  api.post("/courseBatches", data);

export const updateData = (id, data) =>
  api.put(`/courseBatches/${id}`, data);

export const deleteData = (id) =>
  api.delete(`/courseBatches/${id}`);