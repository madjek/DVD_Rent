const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./routes/movie.routes');
const UserRouter = require('./routes/user.routes');
const OrderRouter = require('./routes/order.routes');

//Rutas
router.use('/movie', MovieRouter);
router.use('/user', UserRouter);
router.use('/order', OrderRouter);

module.exports = router;