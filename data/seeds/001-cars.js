exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          make: 'Honda',
          model: 'Element',
          year: 2011,
          mileage: 74500,
          transmission: 'Automatic',
          title: 'Clean'
        },
        {
          make: 'Subaru',
          model: 'Impreza',
          year: 2009,
          mileage: 112500,
          transmission: 'Automatic',
          title: 'Clean'
        },
        {
          make: 'Ford',
          model: 'Model T',
          year: 1908,
          mileage: 42
        }
      ]);
    });
};
