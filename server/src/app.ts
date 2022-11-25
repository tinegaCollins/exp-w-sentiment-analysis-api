const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
import { Request, Response, NextFunction } from 'express';
import { config } from './config/config';
const app = express();
mongoose
  .connect(config.mongo.url)
  .then(() => {
    console.log("connected");
    startServer();
  })
  .catch((error: any) => console.log(error));

const startServer = () => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }
    next();
  });
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));

  app.use("/api/", require("./routes/user-routes.ts"));

  app.get("/test", (req: Request, res: Response) => {
    res.status(200).json({ message: "hello world" });
  });

  //server on
  http
    .createServer(app)
    .listen(8000, "0.0.0.0", () => console.log("listening on port 8000"));
};

