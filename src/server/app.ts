import express from "express";
import http from "http";
import routes from "../routes/routes";
import { Server } from "socket.io";
// import { RabbitMQServer } from "./RabbitMQServer";

const app = express();
const appPort = process.env.PORT || 3004;

const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.set("port", appPort);

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);

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

// serveramqp();

export { app, httpServer, io };
