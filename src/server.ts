import { app } from "./app";
import { env } from "./env";
import cookie from "@fastify/cookie";
import { mealsRoutes } from "./routes/meals";

app.register(cookie);

app.register(mealsRoutes, {
  prefix: "meals",
});

app.listen({ port: env.PORT }).then(() => {
  console.log("🚀 server started on port: " + env.PORT);
});
