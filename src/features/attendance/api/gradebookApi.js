import api from './client';

export const getAllGrades = () => api.get('/grades');
export const getGradeById = (id) => api.get(/grades/);
export const createGrade = (data) => api.post('/grades', data);
export const updateGrade = (id, data) => api.put(/grades/, data);
export const deleteGrade = (id) => api.delete(/grades/);