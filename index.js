import express, { request, response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import workWearRoutes from "./routes/workWearRoute.js";
import shoesRoutes from "./routes/shoesRoute.js";
import glovesRoutes from "./routes/glovesRoute.js";
import ppeRoutes from "./routes/ppeRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  response.send("Сервер готов");
});

app.use("/workWear", workWearRoutes);
app.use("/shoes", shoesRoutes);
app.use("/gloves", glovesRoutes);
app.use("/ppe", ppeRoutes);

async function startApp() {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`\u{2705} App is listening to port ${process.env.PORT}`);
    });
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(console.log(`\u{2705} Connected to Mongo DB!`));
  } catch (error) {
    console.log(error);
  }
}

startApp();
