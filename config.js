module.exports = {
    port: 3000,
    db_credentials: {
        username: 'postgres',
        password: 'luis123',
        database: 'auth',
        host: 'localhost',
        dialect: 'postgres'
    },
    saltRounds: 2,
    jwtSecret: 'secretKey',
    tokenExpireTime: '10h'
}