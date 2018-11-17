const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;


//GOOGLE OAUTH
passport.use('google', new GoogleStrategy({
        consumerKey: '841163980235-0p3edtp1shal8fkdgpqgf0i9ssolde1v.apps.googleusercontent.com',
        consumerSecret: 'ukxp5Vc-urA3FbH6MAo25wlA',
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function (token, tokenSecret, profile, done) {
        User.findOrCreate({googleId: profile.id}, function (err, user) {
            return done(err, user);
        });
    }
));

//GOOGLE TEST OAUTH STRATEGY
passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: '841163980235-0p3edtp1shal8fkdgpqgf0i9ssolde1v.apps.googleusercontent.com',
    clientSecret: 'ukxp5Vc-urA3FbH6MAo25wlA',
}, async (accessToken, refreshToken, profile, contact, done) => {
    // console.log("accessToken", accessToken)
    // console.log("refreshToken", refreshToken)
    // console.log("profile", profile)
    // console.log("contact", contact)
    var Gmail = require('node-gmail-api')
        , gmail = new Gmail(accessToken)
        , s = gmail.messages('label:inbox', {max: 10})

    s.on('data', function (d) {
        console.log(d.snippet)
    })

}));


//GOOGLE CONTACT
