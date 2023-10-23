// Main application
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import { ENV_PATH } from "./utils/constants.js";
import cors from "cors";

dotenv.config({path: ENV_PATH});
const app = express();

// Cross origin protection
const corsOptions = {
    origin: function (origin, callback) {
      if (origin === 'http://localhost:5173') {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  };

//middleware
app.use(cors());  
app.use(express.json());
  

//remove for prod
app.use(morgan("dev")); 
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/api/v1", appRouter);
 
 
export default app;