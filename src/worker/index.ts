import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();
import { upgradeWebSocket } from "hono/cloudflare-workers";

app.get(
  "/ws",
  upgradeWebSocket(() => {
    return {
      opened() {
        console.log("opened");
      },
      onMessage(event, ws) {
        console.log("Received message from client:", event.data);
        ws.send(`Echo: ${event.data}`);
      },
      onClose: (event) => {
        console.log("WebSocket closed:", event);
      },
      onError: (event) => {
        console.error("WebSocket error:", event);
      },
    };
  })
);

app.get("/api/", (c) => c.json({ name: "asdsadsad" }));

export default app;
