import api from "../../../api/axios";

export const getAll = () =>
  api.get("/classes");

export const getById = (id) =>
  api.get(`/classes/${id}`);

export const createData = (data) =>
  api.post("/classes", data);

export const updateData = (id, data) =>
  api.put(`/classes/${id}`, data);

export const deleteData = (id) =>
  api.delete(`/classes/${id}`);