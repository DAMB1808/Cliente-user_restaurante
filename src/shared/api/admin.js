import { axiosAdmin } from './api';

// ================= MENU ITEMS =================
export const getMenuItems = async (params = {}) => {
  return await axiosAdmin.get('/menu', { params });
};
export const createMenuItem = async (data) => {
  return await axiosAdmin.post('/menu', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export const updateMenuItem = async (id, data) => {
  return await axiosAdmin.put(`/menu/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export const deactivateMenuItem = async (id) => {
  return await axiosAdmin.put(`/menu/${id}/deactivate`);
};

// ================= EVENTS =================
export const getEvents = async (params = {}) => {
  return await axiosAdmin.get('/events', { params });
};
export const createEvent = async (data) => {
  return await axiosAdmin.post('/events', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export const updateEvent = async (id, data) => {
  return await axiosAdmin.put(`/events/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export const changeEventStatus = async (id) => {
  return await axiosAdmin.put(`/events/${id}/status`);
};

// ================= RESERVATIONS =================
export const getReservations = async (params = {}) => {
  return await axiosAdmin.get('/reservations', { params });
};
export const createReservation = async (data) => {
  return await axiosAdmin.post('/reservations', data);
};
export const updateReservation = async (id, data) => {
  return await axiosAdmin.put(`/reservations/${id}`, data);
};
export const changeReservationStatus = async (id) => {
  return await axiosAdmin.put(`/reservations/${id}/status`);
};
export const confirmReservation = async (id) => {
  return await axiosAdmin.put(`/reservations/${id}/confirm`);
};
export const cancelReservation = async (id) => {
  return await axiosAdmin.put(`/reservations/${id}/cancel`);
};

// ================= TABLES =================
export const getTables = async (params = {}) => {
  return await axiosAdmin.get('/tables', { params });
};
export const createTable = async (data) => {
  return await axiosAdmin.post('/tables', data);
};
export const updateTable = async (id, data) => {
  return await axiosAdmin.put(`/tables/${id}`, data);
};
export const deactivateTable = async (id) => {
  return await axiosAdmin.put(`/tables/${id}/deactivate`);
};

// ================= ORDERS =================
export const getOrders = async (params = {}) => {
  return await axiosAdmin.get('/orders', { params });
};
export const createOrder = async (data) => {
  return await axiosAdmin.post('/orders', data);
};
export const updateOrder = async (id, data) => {
  return await axiosAdmin.put(`/orders/${id}`, data);
};
export const deactivateOrder = async (id) => {
  return await axiosAdmin.put(`/orders/${id}/deactivate`);
};

// ================= MAINTENANCE =================
export const getMaintenanceRecords = async (params = {}) => {
  return await axiosAdmin.get('/maintenance', { params });
};
export const createMaintenanceRecord = async (data) => {
  return await axiosAdmin.post('/maintenance', data);
};
export const updateMaintenanceRecord = async (id, data) => {
  return await axiosAdmin.put(`/maintenance/${id}`, data);
};
export const deleteMaintenanceRecord = async (id) => {
  return await axiosAdmin.delete(`/maintenance/${id}`);
};
