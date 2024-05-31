import express from "express";
import bodyParser from "body-parser";

import generateImage from "./route/generateImage.js";

const app = express();
const port = 3000;

import dotenv from "dotenv";
dotenv.config();

app.use(bodyParser.json());

import cors from "cors";
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/generate_image", generateImage);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
