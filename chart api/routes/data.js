import { getData } from "../controller/data.js";
import express from "express";
const routerData = express.Router();

routerData.route("/").get(getData);

export default routerData;
