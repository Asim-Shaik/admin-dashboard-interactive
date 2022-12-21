import express from "express";
import data from "./routes/data.js";
import connectDB from "./db/connect.js";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
app.use(express.json());
dotenv.config();
app.use(cors());

app.use("/api/data", data);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
