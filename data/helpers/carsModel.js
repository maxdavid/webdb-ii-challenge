const db = require('../dbConfig');

module.exports = {
  get: function(vin) {
    if (vin) return db('cars').where('vin', vin);
    else return db('cars');
  },
  insert: function(car) {
    return db('cars')
      .insert(car)
      .then(([vin]) => this.get(vin));
  },
  update: function(vin, car) {
    return db('cars')
      .where('vin', vin)
      .update(car)
      .then(count => (count > 0 ? this.get(vin) : null));
  },
  remove: function(vin) {
    return db('cars')
      .where('vin', vin)
      .del();
  }
};
