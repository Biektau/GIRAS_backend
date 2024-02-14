import express from "express";
import {
  createWorkWear,
  getWorkWear,
  getOneWorkWear,
  updateWorkWear,
  deleteWorkWear,
} from "../controllers/workWearController.js";

const route = express.Router();

route.post("/create", createWorkWear);
route.get("/get", getWorkWear);
route.get("/getOne/:id", getOneWorkWear);
route.put("/update/:id", updateWorkWear);
route.delete("/delete/:id", deleteWorkWear);

export default route;
