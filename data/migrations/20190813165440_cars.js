exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('vin');
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.integer('mileage', 6).notNullable();
    tbl.integer('year', 4);
    tbl.string('transmission', 128).defaultTo('');
    tbl.string('title', 128).defaultTo('');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
