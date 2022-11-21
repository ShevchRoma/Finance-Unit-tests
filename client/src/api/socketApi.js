import io from "socket.io-client";
import { URL } from "../constans/API_ROOT";

export const socket = io(URL);

/* socket.on("connect", () => {
    console.log(socket.connected)
  })
 */
