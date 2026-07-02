import api from "../../../api/axios";

export const getAll = () =>
  api.get("/attendance");

export const getById = (id) =>
  api.get(`/attendance/${id}`);

export const createData = (data) =>
  api.post("/attendance", data);

export const updateData = (id, data) =>
  api.put(`/attendance/${id}`, data);

export const deleteData = (id) =>
  api.delete(`/attendance/${id}`);
