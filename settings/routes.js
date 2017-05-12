// var users = require('../controllers/users');


module.exports.configure = function(app) {
    app.get('/', function (req, res) {
        res.render('index');
    });


    // app.get('/s', );



}