require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port =  process.env.PORT;

hbs.registerPartials( __dirname + '/views/partials');

app.set('view engine', 'hbs')

//Serveir contenido estatico
app.use( express.static('public') );


app.get('/', function(req, res) {
    res.render('home',{
        name: 'Ivan Cardona',
        title: 'Curso de Node'
    });
});

app.get('/generic', function(req, res) {
    res.render('generic', {
        name: 'Ivan Cardona',
        title: 'Curso de Node'
    })
});

app.get('/elements', function(req, res) {
    res.render('elements',{
        name: 'Ivan Cardona',
        title: 'Curso de Node'
    })
});

app.get('*', function( req, res ) {
    res.status(404);
    res.send('404 | Page Not Found')
});

app.listen(port);