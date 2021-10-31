const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./routes/movie.routes');
const UserRouter = require('./routes/user.routes');
const OrderRouter = require('./routes/order.routes');

//Rutas
router.use('/movies', MovieRouter);
router.use('/users', UserRouter);
router.use('/orders', OrderRouter);

module.exports = router;