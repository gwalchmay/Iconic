const router = require('express').Router();
const cors = require('cors');
const heroRouter = require('./hero.routes');


const corsOptions = {
  origin: process.env.CLIENT_APP_ORIGIN,
};

router.use(cors(corsOptions));
router.use('/hero', heroRouter);


module.exports = router;
