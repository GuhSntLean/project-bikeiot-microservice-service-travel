import { app, httpServer } from "./app";
import os from "os";
import mongoose from "mongoose";
import "./socketServer";

// const serveramqp = async () => {
//   const serverUser = new RabbitMQServer();
//   // const serverBike = new RabbitMQServer();

//   await serverUser.start();
//   // await serverBike.start();

//   await serverUser.consume("micro.common.travel", (message) => {
//     console.log(message);
//   });

//   // await serverBike.consume("data.bike", (message) => {
//   //   console.log(message.fields);
//   // });
// };

const server = async () => {
  try {
    mongoose
      .connect("mongodb://localhost:27017/datatravel")
      .then((result) => {
        httpServer.listen(app.get("port"), () => {
          console.info(
            `Server is running at port http://${os.hostname}:${app.get("port")}`
          );
        });
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

server();
// serveramqp();
