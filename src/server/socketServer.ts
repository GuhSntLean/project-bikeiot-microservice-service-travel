import { io } from "./app";

const frontUser = "admimlocate";
// TODO: Melhorar a integração
interface RoomUser {
  socket_id: string;
  userid: string;
  rom: string;
}

interface Locate {
  lat: number;
  log: number;
  sentAt: Date;
  idRoute: string;
}

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("joinRoom", (informations) => {
    console.log(informations);

    const message: Locate = {
      idRoute: informations.idroute,
      lat: informations.lat,
      log: informations.log,
      sentAt: new Date(),
    };

    // console.log(message);

    // socket.on("coordenation", (data) => {
    //   // TODO: Criar messagem do usuario
    //   const message: Locate = {
    //     idRoute: data.idroute,
    //     lat: data.lat,
    //     log: data.log,
    //     sentAt: new Date(),
    //   };
    //   console.log(data);
    //   io.to(frontUser).emit("message", message);
    //   // TODO: Enviar dados para o banco ou fila de processamento
    // });
  });
});
