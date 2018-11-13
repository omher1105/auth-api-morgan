const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');

//GOOGLE OAUTH STRATEGY
passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: '841163980235-1d331bsq1a9cgp5cgo66qd8q2037bidk.apps.googleusercontent.com',
    clientSecret: 'lStp8iCh24s887siUU7TnX3B'
}, async (accessToken, refreshToken, profile, contact, done) => {
    // console.log("accessToken", accessToken)
    // console.log("refreshToken", refreshToken)
    console.log("profile", profile)
    // console.log("contact", contact)
}));

