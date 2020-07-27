const router = require('express').Router();
const { connection } = require('../../connection');
const passport = require('../../helpers/passport');

router.get('/', (req, res) => {
    connection.query(
        'SELECT post.*, picture.filename FROM post JOIN picture ON post.picture_id=picture.id ORDER BY post.id DESC',
        (err, results) => {
            if (err) {
                res.status(500).send(`Error while retrieving posts : ${err.message}`);
            } else {
                res.status(200).json(results);
            }
        },
    );
});

router.get('/tag/:tag', (req, res) => {
    const idTag = req.params.tag;
    connection.query(
        'SELECT post.*, picture.filename FROM post JOIN picture ON post.picture_id=picture.id WHERE post.category=? ORDER BY post.id DESC',
        idTag,
        (err, results) => {
            if (err) {
                res.status(500).send(`Error while retrieving posts : ${err.message}`);
            } else {
                res.status(200).json(results);
            }
        },
    );
});

router.get('/age/:age', (req, res) => {
    const age = req.params.age
    const squery = (age) => {
        if (age === 'golden') {
            return '< \'1956-09-30\'';
        } else if (age === 'silver') {
            return 'BETWEEN \'1956-10-01\' AND \'1970-04-30\'';
        } else if (age === 'bronze') {
            return 'BETWEEN \'1970-05-01\' AND \'1984-12-31\'';
        } else {
            return '> \'1985-01-01\'';
        }
    };
    const sql = `SELECT post.*, picture.filename FROM post JOIN picture ON post.picture_id=picture.id WHERE post.date ${squery(age)} ORDER BY post.date DESC`
    console.log(sql);
    connection.query(sql,
        (err, results) => {
            if (err) {
                res.status(500).send(`Error while retrieving posts : ${err.message}`);
            } else {
                res.status(200).json(results);
            }
        },
    );
});



router.get('/:id', (req, res) => {
    const id = req.params.id;
    connection.query(
        'SELECT post.*, picture.filename FROM post JOIN picture ON post.picture_id=picture.id WHERE post.id=?',
        id,
        (err, results) => {
            if (err) {
                res.status(500).send(`Error while retrieving this post : ${err.message}`);
            } else {
                res.status(200).json(results[0]);
            }
        },
    );
});



router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO post SET ?', formData, (err, results) => {
        if (err) {
            res.status(500).send(`Error while posting: ${err.message}`);
        } else {
            connection.query('SELECT * FROM post WHERE id = ?', results.insertId, (errTwo, products) => {
                if (errTwo) {
                    res.status(500).send(`Error while getting this post : ${errTwo.message}`);
                } else {
                    res.status(201).json(products[0]);
                }
            });
        }
    });
});


module.exports = router;