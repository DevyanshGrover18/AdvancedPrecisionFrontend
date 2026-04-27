// const DEFAULT_BASE_URL = "https://node.advanceprecisionmold.com"
const DEFAULT_BASE_URL = "https://advancedprecisionbackend.onrender.com"
// const DEFAULT_BASE_URL = "http://localhost:8000"

const isFormData = (value) =>
  typeof FormData !== "undefined" && value instanceof FormData;

const isPlainObject = (value) =>
  value !== null &&
  typeof value === "object" &&
  !Array.isArray(value) &&
  !isFormData(value);

const buildUrl = (path, baseUrl = DEFAULT_BASE_URL) => {
  if (!path) {
    throw new Error("fetchApi: a request path is required.");
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedBaseUrl = String(baseUrl).replace(/\/+$/, "");
  const normalizedPath = String(path).startsWith("/") ? path : `/${path}`;

  return `${normalizedBaseUrl}${normalizedPath}`;
};

const getAuthToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    window.localStorage.getItem("accessToken") ??
    window.localStorage.getItem("token") ??
    null
  );
};

const parseResponseBody = async (response) => {
  if (response.status === 204) {
    return null;
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
};

const createApiError = async (response, requestUrl) => {
  let payload = null;

  try {
    payload = await parseResponseBody(response);
  } catch {
    payload = null;
  }

  const message =
    (payload && typeof payload === "object" && "message" in payload
      ? payload.message
      : null) ??
    (typeof payload === "string" && payload.trim() ? payload : null) ??
    response.statusText ??
    "Request failed.";

  const error = new Error(message);
  error.name = "ApiError";
  error.status = response.status;
  error.statusText = response.statusText;
  error.url = requestUrl;
  error.data = payload;

  return error;
};

export const fetchApi = async (path, options = {}) => {
  const {
    baseUrl = DEFAULT_BASE_URL,
    headers = {},
    body,
    token,
    method = body ? "POST" : "GET",
    ...rest
  } = options;

  const requestUrl = buildUrl(path, baseUrl);
  const requestHeaders = new Headers(headers);

  requestHeaders.set("Accept", "application/json");

  const requestBody =
    body === undefined || body === null
      ? undefined
      : isFormData(body)
        ? body
        : isPlainObject(body)
          ? JSON.stringify(body)
          : body;

  if (
    requestBody !== undefined &&
    !isFormData(requestBody) &&
    !requestHeaders.has("Content-Type")
  ) {
    requestHeaders.set("Content-Type", "application/json");
  }

  const authToken = token ?? getAuthToken();
  if (authToken && !requestHeaders.has("Authorization")) {
    requestHeaders.set("Authorization", `Bearer ${authToken}`);
  }

  const response = await fetch(requestUrl, {
    ...rest,
    method,
    headers: requestHeaders,
    body: requestBody,
  });

  if (!response.ok) {
    throw await createApiError(response, requestUrl);
  }

  return parseResponseBody(response);
};

export const api = {
  request: fetchApi,
  get: (path, options) => fetchApi(path, { ...options, method: "GET" }),
  post: (path, body, options = {}) =>
    fetchApi(path, { ...options, method: "POST", body }),
  put: (path, body, options = {}) =>
    fetchApi(path, { ...options, method: "PUT", body }),
  patch: (path, body, options = {}) =>
    fetchApi(path, { ...options, method: "PATCH", body }),
  delete: (path, options = {}) =>
    fetchApi(path, { ...options, method: "DELETE" }),
};

export default fetchApi;
