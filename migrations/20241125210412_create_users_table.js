/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary();
        table.string('user_name').notNullable();
        table.string('user_location').notNullable();
        table.string('user_email').unique().notNullable();
        table.string('user_password').notNullable();
        table.string('user_password_confirmation').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('users');
};
