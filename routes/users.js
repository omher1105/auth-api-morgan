const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const {google} = require('googleapis');
const passport = require('passport');
const passportConf = require('../passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/*OAuth local*/
router.post('/authenticate', authController.login);

/*Test de conexion de google*/
router.route('/test/oauth/google')
    .post(passport.authenticate('googleToken', {session: false}));

/*create user with google oauth*/
router.post('/create', authController.createUser);

module.exports = router;
