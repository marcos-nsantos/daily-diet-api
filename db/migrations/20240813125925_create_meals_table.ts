import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("meals", (table) => {
    return knex.schema.createTable("meals", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.text("description");
      table.timestamp("date_time").notNullable();
      table.boolean("is_on_diet").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("meals");
}
