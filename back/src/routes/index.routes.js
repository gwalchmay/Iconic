const router = require('express').Router();
const cors = require('cors');
const heroRouter = require('./hero.routes');
const postRouter = require('./post.routes');
const userRouter = require('./user.routes');
const uploadRouter = require('./upload.routes');
const authRouter = require('./auth.routes');


const corsOptions = {
    origin: process.env.CLIENT_APP_ORIGIN,
};

router.use(cors(corsOptions));
router.use('/hero', heroRouter);
router.use('/post', postRouter);
router.use('/user', userRouter);
router.use('/upload', uploadRouter);
router.use('/auth', authRouter);


module.exports = router;
