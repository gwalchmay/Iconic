const router = require('express').Router();
const { connection } = require('../../connection');

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

router.post('/', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO hero SET ?', formData, (err, results) => {
        console.log(formData);
        if (err) {
            res.status(500).send(`Trouble with this superhero origin: ${err.message}`);
        } else {
            connection.query('SELECT * FROM hero WHERE id = ?', results.insertId, (errTwo, products) => {
                if (errTwo) {
                    res.status(500).send('Error while getting this hero');
                    console.log(err.message)
                } else {
                    res.status(201).json(products[0]);
                }
            });
        }
    });
});



module.exports = router;