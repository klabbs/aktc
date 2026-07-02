import api from "../../../api/axios";

export const getAll = () =>
  api.get("/attendanceBatches");

export const getById = (id) =>
  api.get(`/attendanceBatches/${id}`);

export const createData = (data) =>
  api.post("/attendanceBatches", data);

export const updateData = (id, data) =>
  api.put(`/attendanceBatches/${id}`, data);

export const deleteData = (id) =>
  api.delete(`/attendanceBatches/${id}`);