import { app, httpServer } from "./app";
import os from "os";
import mongoose from "mongoose";
import "./socketServer"

const server = async () => {
  try {
    mongoose
      .connect("mongodb://localhost:27017/datatravel")
      .then((result) =>
        httpServer.listen(app.get("port"), () => {
          console.info(
            `Server is running at port http://${os.hostname}:${app.get("port")}`
          );
        })
      )
      .catch((error) => console.log(error));
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

server();
