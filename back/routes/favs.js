const express = require("express");
const flash = require("connect-flash");
const router = express.Router();
const path = require("path");
const { User, Favorite } = require("../models/index");
router.use(flash());

router.post('/add', (req, res, next) => {
    User.findByPk(req.body.userId)
        .then((userFound) => {
            const user = userFound;
            Favorite.findOne({ where: { userId: req.user.id, imdbID: req.body.movieId} })
            .then((favsFound) => {
                if (favsFound) { return res.send('alreadyAdded')}
                else {
                    Favorite.create({
                    title: req.body.titleMovie,
                    imdbID: req.body.movieId
                    })
                    .then((favCreated) => {
                    user.addFavorite(favCreated)
                    favCreated.setUser(user)
                    res.send(200).json(favCreated)
                    })       
        }})    
    }
)})

router.post('/remove', (req, res, next) => {
    Favorite.destroy({
            where: {
                id: req.body.movie,
                userId: req.body.user
            }
        })
        .then(() => Favorite.findAll({
                where: { userId: req.body.user }
            })
            .then((movies) => res.status(200).json(movies))
        )
})


module.exports = router;