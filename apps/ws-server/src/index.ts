import { WebSocket, WebSocketServer } from "ws";

const port = Number(process.env.PORT) || 8081;
const wss = new WebSocketServer({ port });

wss.on("connection", (socket: WebSocket) => {
  socket.on("message", (message: Buffer) => {
    console.log(message.toString());
  });
});
