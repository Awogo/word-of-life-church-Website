// ============================================================
// WORD OF LIFE BIBLE CHURCH — Xano API Utilities
// src/utils/api.js
// ============================================================

import axios from "axios";
import { API_BASE_URL } from "./constants";

// ── Axios Instance ───────────────────────────────────────────
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ── Request Interceptor: attach auth token if present ────────
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("wolbc_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Response Interceptor: handle global errors ───────────────
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong. Please try again.";
    console.error("[API Error]", message);
    return Promise.reject(new Error(message));
  }
); 

// ── Auth ─────────────────────────────────────────────────────
export const authAPI = {
  login: (email, password) =>
    api.post("/auth/login", { email, password }),

  signup: (data) =>
    api.post("/auth/signup", data),

  logout: () => {
    localStorage.removeItem("wolbc_token");
    localStorage.removeItem("wolbc_user");
  },
};

// ── Sermons ──────────────────────────────────────────────────
export const sermonsAPI = {
  getAll: (params) =>
    api.get("/sermons", { params }),           // ?year=&category=&page=

  getById: (id) =>
    api.get(`/sermons/${id}`),

  getLatest: () =>
    api.get("/sermons/latest"),

  getCategories: () =>
    api.get("/sermons/categories"),
};

// ── Events ───────────────────────────────────────────────────
export const eventsAPI = {
  getUpcoming: () =>
    api.get("/events/upcoming"),

  getAll: (params) =>
    api.get("/events", { params }),

  getById: (id) =>
    api.get(`/events/${id}`),

  register: (eventId, data) =>
    api.post(`/events/${eventId}/register`, data),
};

// ── Ministries ───────────────────────────────────────────────
export const ministriesAPI = {
  getAll: () =>
    api.get("/ministries"),

  getById: (id) =>
    api.get(`/ministries/${id}`),
};

// ── Giving ───────────────────────────────────────────────────
export const givingAPI = {
  initiate: (data) =>
    api.post("/giving/initiate", data),        // { amount, category, name, email }

  verify: (reference) =>
    api.get(`/giving/verify/${reference}`),

  getHistory: () =>
    api.get("/giving/history"),                // auth required
};

// ── Member Dashboard ─────────────────────────────────────────
export const memberAPI = {
  getProfile: () =>
    api.get("/member/profile"),

  updateProfile: (data) =>
    api.patch("/member/profile", data),

  getGivingHistory: (params) =>
    api.get("/member/giving-history", { params }),

  getRegistrations: () =>
    api.get("/member/registrations"),
};

// ── Eagle Nest Booking ───────────────────────────────────────
export const eagleNestAPI = {
  getRooms: () =>
    api.get("/eagle-nest/rooms"),

  checkAvailability: (roomId, checkIn, checkOut) =>
    api.get(`/eagle-nest/availability`, {
      params: { roomId, checkIn, checkOut },
    }),

  createBooking: (data) =>
    api.post("/eagle-nest/bookings", data),

  getBooking: (id) =>
    api.get(`/eagle-nest/bookings/${id}`),
};

// ── ISOM School ──────────────────────────────────────────────
export const isomAPI = {
  getCourses: () =>
    api.get("/isom/courses"),

  register: (data) =>
    api.post("/isom/register", data),

  getStudentPortal: () =>
    api.get("/isom/student-portal"),           // auth required
};

// ── Contact & Prayer Requests ────────────────────────────────
export const contactAPI = {
  sendMessage: (data) =>
    api.post("/contact/message", data),        // { name, email, phone, subject, message }

  submitPrayerRequest: (data) =>
    api.post("/contact/prayer-request", data), // { name, email, request, isPublic }
};

// ── Newsletter ───────────────────────────────────────────────
export const newsletterAPI = {
  subscribe: (email, name) =>
    api.post("/newsletter/subscribe", { email, name }),
};

export default api;