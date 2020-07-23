const router = require('express').Router();
const { connection } = require('../../connection');

router.post('/', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO user SET ?', formData, (err, results) => {
        if (err) {
            res.status(500).send(`Error while creating user: ${err.message}`);
        } else {
            connection.query('SELECT * FROM user WHERE id = ?', results.insertId, (errTwo, user) => {
                if (errTwo) {
                    res.status(500).send(`Error while getting this user : ${errTwo.message}`);
                } else {
                    res.status(201).json(user[0]);
                }
            });
        }
    });
});


module.exports = router;