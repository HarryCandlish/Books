exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", table => {
    table.increments("id").primary();
    table.integer("user_id");
    table.string("title");
    table.string("author");
    table.string("written");
    table.string("description", 1000);
    table.string("category");
    table.bigint("date");
    table.boolean("read");
    table.boolean("reading");
    table.string("image", 1000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books");
};
