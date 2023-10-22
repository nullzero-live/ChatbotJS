// MongoDB Connection 
import { connect, disconnect } from "mongoose";
import { ENV_PATH } from "../utils/constants.js";
import * as dotenv from "dotenv";


dotenv.config({path: ENV_PATH});
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error);
        throw new Error("Cannot connect to MongoDB");
    };
};

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
            console.log(error);
            throw new Error("Error Disconnecting from MongoDB")
        }
    }

export { connectToDatabase, disconnectFromDatabase };
 