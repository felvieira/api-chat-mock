module.exports = (req, res, next) => {
    console.log('cookies: ', req.headers.cookie);
    console.log('query params: ', req.query);
    next();
};