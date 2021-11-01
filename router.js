const router = require('express').Router();

const auth = require('./middleware/auth');

//Routes Import
const MovieRouter = require('./routes/movie.routes');
const UserRouter = require('./routes/user.routes');
const OrderRouter = require('./routes/order.routes');

//Paths
router.use('/movies', MovieRouter);
router.use('/', UserRouter);
router.use('/orders',auth, OrderRouter);

module.exports = router