/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    await knex.schema.createTable("posts", (table) => {
        table.increments("id").primary();
        table.string("link").notNullable();
        table.json("tags");
        table.string("description");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    await knex.schema.dropTable("users");
};
