import apiClient from "../../../api/axios";

// Get all library items
export const getLibraryItems = async () => {
  const response = await apiClient.get("/library");
  return response.data;
};

// Get a single library item by ID
export const getLibraryItemById = async (id) => {
  const response = await apiClient.get(`/library/${id}`);
  return response.data;
};

// Create a new library item
export const createLibraryItem = async (data) => {
  const response = await apiClient.post("/library", data);
  return response.data;
};

// Update a library item
export const updateLibraryItem = async (id, data) => {
  const response = await apiClient.put(`/library/${id}`, data);
  return response.data;
};

// Delete a library item
export const deleteLibraryItem = async (id) => {
  const response = await apiClient.delete(`/library/${id}`);
  return response.data;
};