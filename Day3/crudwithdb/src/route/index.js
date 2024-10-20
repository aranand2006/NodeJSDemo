const express = require('express');
const router = express.Router();
const TraineeRoutes = require('./trainee.route');
const UserRoutes = require('./user.route')
const AuthRoutes = require('./auth.route');

router.use('/trainee',TraineeRoutes);
router.use('/user',UserRoutes);
router.use('/auth',AuthRoutes);

module.exports = router