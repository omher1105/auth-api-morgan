const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const {google} = require('googleapis');
// const passport = require('passport');
// const passportConf = require('../passport');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/*OAuth local*/
router.post('/authenticate', authController.login);

/*Define values of google oauth*/
const GoogleOAuth2 = google.auth.OAuth2;
const GoogleOauth2Client = new GoogleOAuth2(
    '344821362544-3spajk8sg6vhddmbu0eol6ep7impo9u7.apps.googleusercontent.com',
    '8HO575wKWGiKqmvrH43PKtoq',
    'http://localhost:4200/oauthcallback'
);

const scopes = [
    'https://www.googleapis.com/auth/contacts',
];

const url = GoogleOauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
});

/*api google auth*/
router.get('/oauth/google', function (res, req) {
    res.send(url);
});


// router.route('/oauth/google')
//     .post(passport.authenticate('googleToken', {session: false}));

module.exports = router;
