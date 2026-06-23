import api from "../../../api/axios";

export const getTimetables = () =>
  api.get("/timetable");

export const getTimetableById = (id) =>
  api.get(`/timetable/${id}`);

export const createTimetable = (data) =>
  api.post("/timetable", data);

export const updateTimetable = (id, data) =>
  api.put(`/timetable/${id}`, data);

export const deleteTimetable = (id) =>
  api.delete(`/timetable/${id}`);