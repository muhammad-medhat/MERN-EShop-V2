import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
dotenv.config();
connectDb();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const app = express();

const corsOptions = {
  origin: "http://localhost:3000/",
};

app.use(cors());
/************ to get the body data ****** */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*************************************** */
/** cookie-parser middleware */
app.use(cookieParser());
/** Routes */

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
/****** End Routes Section *************** */

/** Deployment */
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use("/uploads", express.static("/var/data/uploads"));
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  const __dirname = path.resolve();
  app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
/** End Deployment */
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT} in ${NODE_ENV}  mode`.yellow);
});
