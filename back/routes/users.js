const express = require("express");
const flash = require("connect-flash");
const router = express.Router();
const { User, Favorite } = require("../models/index");
router.use(flash());

router.post('/', (req, res) => {
    User.create(req.body)
    .then(() => res.sendStatus(200))
});

router.post("/name", (req, res) => {
    User.findAll()
    .then((users) => {
      var usersFiltered = users.filter((x) => x.name.toLowerCase().includes(req.body.name.toLowerCase()));
      res.send(usersFiltered);
    })
})

router.get('/:id/favorites', (req, res) => {
    Favorite.findAll({ where: { userId: req.params.id }})
    .then((favsFound) => res.json(favsFound))
});

router.get('/:id/favorite/:movieId', (req, res) => {
    Favorite.findOne({ where: { userId: req.params.id, imdbID: req.params.movieId} })
        .then((favsFound) => {
            if (favsFound) {res.send('alreadyAdded')}
            else res.send('notFound');
        })
});

module.exports = router;