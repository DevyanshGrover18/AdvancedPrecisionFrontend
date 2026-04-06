import { api } from "./api";

const ADMIN_TOKEN_KEY = "adminToken";

export const getAdminToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(ADMIN_TOKEN_KEY);
};

export const setAdminToken = (token) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(ADMIN_TOKEN_KEY, token);
};

export const clearAdminToken = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(ADMIN_TOKEN_KEY);
};

export const loginAdmin = async ({ username, password }) => {
  const response = await api.post("/api/admin/login", { username, password });

  const token =
    response?.token ??
    response?.jwt ??
    response?.jwtToken ??
    response?.accessToken ??
    response?.data?.token ??
    response?.data?.accessToken ??
    null;

  if (!token || typeof token !== "string") {
    throw new Error("Login succeeded but no admin token was returned.");
  }

  return token;
};

export const uploadProductImage = async ({ image, productId } = {}) => {
  if (!image) {
    throw new Error("Select an image file to upload.");
  }

  const formData = new FormData();
  formData.append("image", image);

  if (productId) {
    formData.append("productId", productId);
  }

  return adminApi.post("/api/products/upload-image", formData);
};

export const adminApi = {
  get: (path, options = {}) =>
    api.get(path, { ...options, token: options.token ?? getAdminToken() }),
  post: (path, body, options = {}) =>
    api.post(path, body, { ...options, token: options.token ?? getAdminToken() }),
  put: (path, body, options = {}) =>
    api.put(path, body, { ...options, token: options.token ?? getAdminToken() }),
  patch: (path, body, options = {}) =>
    api.patch(path, body, { ...options, token: options.token ?? getAdminToken() }),
  delete: (path, options = {}) =>
    api.delete(path, { ...options, token: options.token ?? getAdminToken() }),
};
