import express from "express";
import {
  createPpe,
  getPpe,
  getOnePpe,
  updatePpe,
  deletePpe,
} from "../controllers/ppeController.js";

const route = express.Router();

route.post("/create", createPpe);
route.get("/get", getPpe);
route.get("/getOne/:id", getOnePpe);
route.put("/update/:id", updatePpe);
route.delete("/delete/:id", deletePpe);

export default route;
