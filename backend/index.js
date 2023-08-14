import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
dotenv.config();
connectDb();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const app = express();

const corsOptions = {
  origin: "http://localhost:3000/",
};

app.use(cors());
/** Routes */
app.get("/", (req, res) => {
  res.send(`API is Running om port ${PORT}...`);
});
app.use("/api/products", productRoutes);
/****** End Routes Section *************** */
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT} in ${NODE_ENV}  mode`.yellow);
});
