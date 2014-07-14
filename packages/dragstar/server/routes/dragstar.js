'use strict';

// The Package is past automatically as first parameter
module.exports = function(Dragstar, app, auth, database) {

    app.get('/dragstar/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/dragstar/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/dragstar/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/dragstar/example/render', function(req, res, next) {
        Dragstar.render('index', {
            package: 'dragstar'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
    app.get('/dragstar/article', function(req, res, next) {
//        Dragstar.setDefaultTemplate('');
        Dragstar.render('../article', {
            package: 'dragstar'
        }, function(err, html) {
            res.send(html);
        });
    });
};
