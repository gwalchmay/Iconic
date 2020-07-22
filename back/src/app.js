const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes/index.routes');
// const passport = require('../helpers/passport');


const app = express();
const corsOptions = {
    origin: process.env.CLIENT_APP_ORIGIN,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use('/images', express.static('public/images'));

app.use('/api', router);

// app.get('/homeadmin', passport.authenticate('jwt', { session: false }), (req, res) => {
//     res.send(req.user);
// });

module.exports = app;