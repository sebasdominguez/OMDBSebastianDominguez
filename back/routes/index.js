const express = require('express');
const passport = require('passport');
const { User, Favorite } = require('../models')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router();
const users = require("./users");
const favs = require("./favs");

//---------- MIDDLEWARE isLogedIn: check if the user is logged
function isLoged(req, res, next) {
    if (req.isAuthenticated()) { 
        res.json({ id:req.user.id, email:req.user.email, name: req.user.name })
    } else res.json({})
}
//----//

router.get('/persist', isLoged)

router.use("/users", users);

router.use("/favs", favs);

router.post('/login', passport.authenticate('local') , (req, res, next) => { 
    res.send({ id: req.user.id, email: req.user.email, name:req.user.name })
});

router.get('/logout', (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.redirect("/");
  }
});

module.exports = router;