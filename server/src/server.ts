import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./utils/db";
import { router } from "./routes/route";

/* environment variable congiguration */
dotenv.config();

/* Mongodb connection */
connectDb()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err: Error) => {
    console.log(err.message);
  });

const app = express();

/* configuring middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);

app.listen(4000, () => {
  console.log("server is running at 4000");
});
