// MongoDB Connection 
import { connect, disconnect } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
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
 