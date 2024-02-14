import express from "express";
import {
  createShoes,
  getShoes,
  getOneShoes,
  updateShoes,
  deleteShoes,
} from "../controllers/shoesController.js";

const route = express.Router();

route.post("/create", createShoes);
route.get("/get", getShoes);
route.get("/getOne/:id", getOneShoes);
route.put("/update/:id", updateShoes);
route.delete("/delete/:id", deleteShoes);

export default route;
