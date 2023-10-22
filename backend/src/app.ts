// Main application
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import { ENV_PATH } from "./utils/constants.js";

dotenv.config({path: ENV_PATH});
const app = express();

//middleware
app.use(express.json());

//remove for prod
app.use(morgan("dev")); 
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/api/v1", appRouter);
 
 
export default app;
 