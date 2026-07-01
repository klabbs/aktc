import api from "../../../api/axios";

export const getAll = () =>
  api.get("/forums");

export const getById = (id) =>
  api.get(`/forums/${id}`);

export const createData = (data) =>
  api.post("/forums", data);

export const updateData = (id, data) =>
  api.put(`/forums/${id}`, data);

export const deleteData = (id) =>
  api.delete(`/forums/${id}`);
