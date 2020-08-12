const express = require('express');
const passport = require('passport');
const { User, Favorite } = require('../models')
const LocalStrategy = require('passport-local').Strategy

const router = express.Router();

router.get('/', (req, res) => {
    console.log("---------------------------")
    console.log("req.session: ", req.session) // express-session
    console.log("req.sessionID: ", req.sessionID) // express-session
    console.log("req.cookies: ", req.cookies) // cookie-parser
    console.log("req.user:", req.user)
    console.log("---------------------------")
});

//---------- MIDDLEWARE isLogedIn: check if the user is logged
function isLogedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("ESTA AUTENTICADO!") // passport method that check if a user is authenticated or not
        next();
    } else {
        res.redirect('/login');
    }
}

function isLoged(req, res, next) {
    if (req.isAuthenticated()) { // passport method that check if a user is authenticated or not
        res.redirect('/');
    } else {
        next();
    }
}

// router.get('/login', isLoged, (req, res) => {
//   res.send(templates.login)
// });

// router.get('/register', isLoged, (req, res) => {
//   res.send(templates.register)
// });

// router.get('/public', (req, res) => {
//   res.send(templates.public);
// });

router.get('/private/:ruta', isLogedIn, (req, res, next) => {
    res.sendStatus(200).redirect('/ruta');
});

router.post('/users', (req, res) => {
    console.log("req.body", req.body)
    User.create(req.body)
        .then(user => res.sendStatus(200)) // New Json User Object returned
});

router.post('/login', passport.authenticate('local', {
    successRedirect: null,
    failureRedirect: null,
    failureFlash: true
}), (req, res, next) => { // Passport strategy for authenticating with a username and password. | http://www.passportjs.org/packages/passport-local/
    console.log('Welcome User !!!', req.user);
    res.send({ user: req.user })
});

router.post('/favs/add', (req, res, next) => {
    User.findByPk(req.body.userId)
        .then((userFound) => {
            const user = userFound;
            Favorite.create({
                    title: req.body.titleMovie,
                    imdbID: req.body.movieId
                })
                .then((favCreated) => {
                    user.addFavorite(favCreated)
                    favCreated.setUser(user)
                    res.json(favCreated)
                })
        })
});

router.get('/users/:id/favorites', (req, res, next) => {
    Favorite.findAll({ where: { userId: req.params.id } })
        .then((favsFound) => {
            res.json(favsFound);
        })
});

router.post('/favs/remove', (req, res, next) => {
  console.log("entre al BACK de Remove")
  console.log("REQ.BODy",req.body)
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


// router.post('/logout', (req, res) => {
//   if (req.isAuthenticated()) {
//     req.logout(); // passport method for logout
//   }
//   res.send({})
// });

module.exports = router;