import express from "express";
import {
  createGloves,
  getGloves,
  getOneGloves,
  updateGloves,
  deleteGloves,
} from "../controllers/glovesController.js";

const route = express.Router();

route.post("/create", createGloves);
route.get("/get", getGloves);
route.get("/getOne/:id", getOneGloves);
route.put("/update/:id", updateGloves);
route.delete("/delete/:id", deleteGloves);

export default route;
