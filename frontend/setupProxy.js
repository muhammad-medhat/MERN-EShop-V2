import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  console.log("Proxy middleware");
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
