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
  socket.on("", (informations) => {
    socket.join(informations);

    socket.on("coordenation", (data) => {
      // TODO: Criar messagem do usuario
      const message: Locate = {
        idRoute: data.idroute,
        lat: data.lat,
        log: data.log,
        sentAt: new Date(),
      };

      io.to(frontUser).emit("message", message);
      // TODO: Enviar dados para o banco ou fila de processamento
    });
  });
});
