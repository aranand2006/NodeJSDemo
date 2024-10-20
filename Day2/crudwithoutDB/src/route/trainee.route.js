const express = require('express');
const router = express.Router();
const TraineeController = require('../contrller/trainee.controller');
const Trainee = require('../model/trainee.model');

router.get('/',TraineeController.getTrainees);
router.get('/:id',TraineeController.getTrainee)
router.post('/create',TraineeController.createTrainee);
router.delete('/delete/:id',TraineeController.deleteTrainee)
router.put('/update/:id',TraineeController.updateTrainee)
module.exports = router;

// server.js
//const TraineeRoutes = require('./src/route/trainee.route');

//app.use('/trainee',TraineeRoutes); 