const router = require('express').Router();
const multer = require('multer');
const { connection } = require('../../connection');
const passport = require('../../helpers/passport');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        let filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    },
});

const upload = multer({ storage }).single('file');


router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(500).json(err);
        } else {
            const filename = { filename: res.req.file.filename };
            connection.query('INSERT INTO picture SET ?', filename, (errTwo) => {
                if (errTwo) {
                    res.status(500).send("Erreur lors de l'ajout de l'image en base de données");
                } else {
                    connection.query('SELECT * FROM picture WHERE filename= ?', filename.filename, (errThree, pic) => {
                        if (errThree) {
                            res.status(500).send('Erreur lors du retour de la base de données');
                        } else {
                            res.status(201).json(pic[0]);
                        }
                    })
                };
            })
        }
    })
});
module.exports = router;