import api from "../../../api/axios";

export const getEnrollments = () =>
  api.get("/enrollments");

export const getEnrollmentById = (id) =>
  api.get(`/enrollments/${id}`);

export const createEnrollment = (data) =>
  api.post("/auth/register", data);

export const updateEnrollment = (id, data) =>
  api.put(`/enrollment/${id}`, data);

export const deleteEnrollment = (id) =>
  api.delete(`/enrollments/${id}`);