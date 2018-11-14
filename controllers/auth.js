const authService = require('../services/auth');

function login(req, res) {
    return authService.authenticate(req.body)
        .then(token => {
            res.send({
                success: true,
                data: {token}
            });
        })
        .catch(err => {
            res.send({
                success: false,
                message: err.message
            });
        })
}

function createUser(req, res) {
    return authService.createUser(req.body)
        .then(json => {
            res.send({
                success: true,
                data: {json}
            })
        })
        .catch(err => {
            res.send({
                success: false,
                message: err.message
            });
        })
}

module.exports = {
    login,
    createUser
};