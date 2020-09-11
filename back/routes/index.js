const express = require('express');
const passport = require('passport');
const router = express.Router();
const users = require("./users");
const favs = require("./favs");

//---------- MIDDLEWARE isLogedIn: check if the user is logged
function isLoged(req, res) {
    if (req.isAuthenticated()) { 
        res.json({ id:req.user.id, email:req.user.email, name: req.user.name })
    } else res.json({})
}
//----//

router.get('/persist', isLoged)

router.use("/users", users);

router.use("/favs", favs);

router.post('/login', passport.authenticate('local') , (req, res) => { 
    res.send({ id: req.user.id, email: req.user.email, name:req.user.name })
});

router.post('/logout', (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.redirect("/");
  }
});

module.exports = router;