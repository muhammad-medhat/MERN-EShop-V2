import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import cors from "cors";
import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
connectDb();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:3000/",
};

app.use(cors(corsOptions));
/** Routes */
app.get("/", (req, res) => {
  res.send(`API is Running om port ${PORT}...`);
});
app.use("/api/products", productRoutes);
/****** End Routes Section *************** */
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT} in ${NODE_ENV}  mode`.yellow);
});
