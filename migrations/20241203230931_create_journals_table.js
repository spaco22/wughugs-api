/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('journals', (table) => {
        table.increments('journal_id').primary();
        table.integer('wug_id').unsigned().notNullable().references('wug_id').inTable("wugs").onDelete("CASCADE");
        table.integer('user_id').unsigned().notNullable().references('user_id').inTable("users").onDelete("CASCADE");
        table.integer('user_name').unsigned().notNullable().references('user_name').inTable("users").onDelete("CASCADE");
        table.integer('wug_name').unsigned().notNullable().references('wug_name').inTable("wugs").onDelete("CASCADE");
        table.string('title').notNullable(); 
        table.text('text').notNullable();
        table.timestamp('date_created').notNullable().defaultTo(knex.fn.now()); 
        table.string('img').defaultTo('');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('wugs');
};