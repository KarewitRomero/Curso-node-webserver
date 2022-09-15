
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Middleware
//Servir contenido estatico
app.use( express.static('public'));

//Controlador
app.get('/', ( req, res ) => {
    res.render('home', {
      nombre: 'Karewit Romero',
      titulo: 'Curso Node'
    });
});

app.get('/generic', ( req, res ) => {
    res.render('generic', {
      nombre: 'Karewit Romero',
      titulo: 'Curso Node'
    });
});

app.get('/elements', ( req, res ) => {
    res.render('elements', {
      nombre: 'Karewit Romero',
      titulo: 'Curso Node'
    });
});



//Comodin para cualquier ruta
app.get('*', ( req, res ) => {
    res.sendFile(__dirname + '/public/404.html');
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });