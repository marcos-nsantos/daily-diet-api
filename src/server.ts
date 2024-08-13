import { app } from "./app";
import { env } from "./env";

app.listen({ port: env.PORT }).then(() => {
  console.log("🚀 server started on port: " + env.PORT);
});
