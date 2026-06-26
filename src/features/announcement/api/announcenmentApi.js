import apiClient from "../../../api/axios";

// Get all announcements
export const getAnnouncements = async () => {
  const response = await apiClient.get("/announcements");
  return response.data;
};

// Get a single announcement by ID
export const getAnnouncementById = async (id) => {
  const response = await apiClient.get(`/announcements/${id}`);
  return response.data;
};

// Create a new announcement
export const createAnnouncement = async (data) => {
  const response = await apiClient.post("/announcements", data);
  return response.data;
};

// Update an announcement
export const updateAnnouncement = async (id, data) => {
  const response = await apiClient.put(`/announcements/${id}`, data);
  return response.data;
};

// Delete an announcement
export const deleteAnnouncement = async (id) => {
  const response = await apiClient.delete(`/announcements/${id}`);
  return response.data;
};