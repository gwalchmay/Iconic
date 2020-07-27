const router = require('express').Router();
const { connection } = require('../../connection');
const passport = require('../../helpers/passport');

router.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM hero ORDER BY name', (err, results) => {
            if (err) {
                res.status(500).send(`Error: ${err.message}`);
            } else {
                res.status(200).json(results);
            }
        },
    );
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO hero SET ?', formData, (err, results) => {
        if (err) {
            res.status(500).send(`Trouble with this superhero origin: ${err.message}`);
        } else {
            connection.query('SELECT * FROM hero WHERE id = ?', results.insertId, (errTwo, products) => {
                if (errTwo) {
                    res.status(500).send('Error while getting this hero');
                } else {
                    res.status(201).json(products[0]);
                }
            });
        }
    });
});



module.exports = router;