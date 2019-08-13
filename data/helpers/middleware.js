const carsModel = require('./carsModel');

module.exports = {
  validateCarVin,
  validateCar
};

function validateCarVin(req, res, next) {
  req.car = { vin: req.params.vin };
  if (req.car.vin) {
    carsModel.get(req.car.vin).then(car => {
      if (car.length) {
        [req.car] = car;
        next();
      } else res.status(400).json({ message: 'Invalid Car VIN' });
    });
  } else res.status(400).json({ message: 'Car VIN required' });
}

function validateCar(req, res, next) {
  const { make, model, mileage } = req.body;
  if (make && model && mileage) next();
  else if (!make)
    res.status(400).json({ message: "Missing required 'make' field" });
  else if (!model)
    res.status(400).json({ message: "Missing required 'model' field" });
  else if (!mileage)
    res.status(400).json({ message: "Missing required 'mileage' field" });
  else res.status(400).json({ message: 'Missing car data in body' });
}
