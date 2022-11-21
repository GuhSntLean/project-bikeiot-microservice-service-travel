import express from "express";
import http from "http";
import routes from "../routes/routes";
import { RabbitMQServer } from "./RabbitMQServer";

const app = express();
const appPort = process.env.PORT || 3003;

const httpServer = http.createServer(app);

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

export { app, httpServer };
