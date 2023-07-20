import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./route/productRoutes.js";
import reviewRoutes from "./route/reviewRoutes.js";
import cartRoutes from "./route/cartRoutes.js";

import customerRouter from "./route/customerRouter.js";
import categoryRouter from "./route/categoryRouter.js";
//imports for locating our directory (for deployment)
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url); // get the current file location of server.js
const __dirname = dirname(__filename); //extract directory from that location.

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

// routes:
app.use("/api/customers", customerRouter);
app.use("/api/category", categoryRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server started on PORT:${process.env.PORT}`);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log(`Database ${process.env.DB_NAME} connected`);
  })
  .catch((error) => {
    console.log(error.toString());
  });

app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/cart", cartRoutes);

//serve our files statically
app.use(express.static(path.join(__dirname, "../frontend/dist")));
//any other request made serve the index.html of our production build frontend.
app.get("*", (req, res) => {
  res.sendFile(__dirname + "../frontend/dist/index.html");
});
