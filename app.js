require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine','hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Middleware - Servir contenido estatico
// app.use( express.static('public') );

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
})

app.listen(port, () => {
    console.log(`Example at ${port}`);
})