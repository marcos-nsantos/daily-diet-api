import { FastifyInstance } from "fastify";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import { knex } from "../database";

export async function mealsRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const createMealBodySchema = z.object({
      name: z.string(),
      description: z.string().optional(),
      isOnDiet: z.boolean(),
    });

    const { name, description, isOnDiet } = createMealBodySchema.parse(
      request.body,
    );

    let sessionId = request.cookies.sessionId;
    if (!sessionId) {
      sessionId = randomUUID();
      const sevenDays = 7 * 24 * 60 * 60 * 1000;

      reply.setCookie("sessionId", sessionId, {
        path: "/",
        maxAge: sevenDays,
      });
    }

    await knex("meals").insert({
      id: randomUUID(),
      name,
      description,
      is_on_diet: isOnDiet,
      session_id: sessionId,
      date_time: new Date(),
    });
  });
}
