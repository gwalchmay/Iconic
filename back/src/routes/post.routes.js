const router = require('express').Router();
const { connection } = require('../../connection');

router.get('/', (req, res) => {
    connection.query(
        'SELECT post.*, picture.filename FROM post JOIN picture ON post.picture_id=picture.id',
        (err, results) => {
            if (err) {
                res.status(500).send(`Error while retrieving posts : ${err.message}`);
            } else {
                res.status(200).json(results);
            }
        },
    );
});


router.post('/', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO post SET ?', formData, (err, results) => {
        console.log(formData);
        if (err) {
            res.status(500).send(`Error while posting: ${err.message}`);
        } else {
            connection.query('SELECT * FROM post WHERE id = ?', results.insertId, (errTwo, products) => {
                if (errTwo) {
                    res.status(500).send(`Error while getting this post : ${errTwo.message}`);
                    console.log(err.message)
                } else {
                    res.status(201).json(products[0]);
                }
            });
        }
    });
});


module.exports = router;