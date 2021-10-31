const router = require('express').Router();

const auth = require('./middleware/auth');


//Importamos Routes definidas en views
const MovieRouter = require('./routes/movie.routes');
const UserRouter = require('./routes/user.routes');
const OrderRouter = require('./routes/order.routes');

//Rutas
router.use('/movies',auth, MovieRouter);
router.use('/users', UserRouter);
router.use('/orders', OrderRouter);

module.exports = router;
