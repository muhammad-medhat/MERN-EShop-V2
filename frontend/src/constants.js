export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export const PROXY = "";
// export const PROXY = "http://localhost:5000";
export const PRODUCTS_URL = PROXY + "/api/products";
export const USERS_URL = PROXY + "/api/users";
export const ORDERS_URL = PROXY + "/api/orders";
export const PAYPAL_URL = "";
