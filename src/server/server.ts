import { app, httpServer } from "./app";
import os from "os";

const server = async () => {
  try {
    httpServer.listen(app.get("port"), () => {
      console.info(
        `Server is running at port http://${os.hostname}:${app.get("port")}`
      );
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

server();
