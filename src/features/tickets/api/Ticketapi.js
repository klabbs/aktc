import api from "../../../api/axios";

export const getUsers = () =>
  api.get("/users");

export const getUserById = (id) =>
  api.get(`/users/${id}`);

export const createUser = (data) =>
  api.post("/auth/register", data);

export const updateUser = (id, data) =>
  api.put(`/users/${id}`, data);

export const deleteUser = (id) =>
  api.delete(`/users/${id}`);

// ==================== COMPLAINTS / TICKETS ====================

/**
 * Get all complaints
 */
export const getComplaints = () =>
  api.get("/support");

/**
 * Get a single complaint by ID
 */
export const getComplaintById = (id) =>
  api.get(`/support/${id}`);

/**
 * Create a new complaint (automatically generates a complaint ticket)
 */
export const createComplaint = (data) =>
  api.post("/support", data);

/**
 * Generate a ticket for an existing complaint
 */
export const generateComplaintTicket = (complaintId, ticketData = {}) =>
  api.post(`/support/${complaintId}/ticket`, ticketData);

/**
 * Update a complaint
 */
export const updateComplaint = (id, data) =>
  api.put(`/support/${id}`, data);

/**
 * Delete a complaint
 */
export const deleteComplaint = (id) =>
  api.delete(`/support/${id}`);