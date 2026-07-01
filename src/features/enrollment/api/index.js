import api from "../../../api/axios";

export const getAll = () =>
  api.get("/enrollments");

export const getById = (id) =>
  api.get(`/enrollments/${id}`);

export const createData = (data) =>
  api.post("/enrollments", data);

export const updateData = (id, data) =>
  api.put(`/enrollments/${id}`, data);

export const deleteData = (id) =>
  api.delete(`/enrollments/${id}`);