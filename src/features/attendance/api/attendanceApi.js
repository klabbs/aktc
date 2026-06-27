import api from './client';

export const getAllAttendance = () => api.get('/attendance');
export const getAttendanceById = (id) => api.get(/attendance/);
export const createAttendance = (data) => api.post('/attendance', data);
export const updateAttendance = (id, data) => api.put(/attendance/, data);
export const deleteAttendance = (id) => api.delete(/attendance/);