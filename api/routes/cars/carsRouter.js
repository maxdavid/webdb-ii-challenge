const router = require('express').Router();

const carsModel = require('../../../data/helpers/carsModel');
const middleware = require('../../../data/helpers/middleware');
const { validateCar, validateCarVin } = middleware;

router.get('/', (req, res) => {
  carsModel.get().then(cars => res.status(200).json(cars));
});

router.get('/:vin', validateCarVin, (req, res) => {
  res.status(200).json(req.car);
});

router.post('/', validateCar, (req, res) => {
  carsModel.insert(req.body).then(newCar => {
    if (newCar) res.status(201).json({ message: 'Car added.', car: newCar });
    else res.status(500).json({ message: 'Error adding car.' });
  });
});

router.delete('/:vin', validateCarVin, (req, res) => {
  carsModel.remove(req.car.vin).then(records => {
    if (records) res.status(200).json({ message: 'Car deleted.' });
    else res.status(500).json({ message: 'Error deleting car.' });
  });
});

router.put('/:vin', validateCarVin, validateCar, (req, res) => {
  carsModel.update(req.car.vin, req.body).then(car => {
    if (car) res.status(200).json({ message: 'Car updated.', car: car });
    else res.status(500).json({ message: 'Error updating car.' });
  });
});

module.exports = router;
