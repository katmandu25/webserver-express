const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helper');

// Para obtener el puerto de manera dinámica al subir la app a Heroku utilizamos
// lo siguiente

const port = process.env.PORT || 3000

//Ademas en el package.json pondremos un script start que invoque al server.js para que Heroku
// sepa arrancar la aplicación.

app.use(express.static(__dirname + '/public'))

//Express hbs

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//Helpers

/* hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
}); */

app.get('/', function(req, res) {
    //res.send('Hello World')

    /* let salida = {
        nombre: 'Alberto',
        edad: 47,
        url: req.url
    } */

    res.render('home', {
        nombre: 'Alberto'
    });
});

app.get('/about', function(req, res) {

    res.render('about', {});
})



/* app.get('/data', function(req, res) {
    //res.send('Hello World')


    res.send('Hola data')
})
 */
app.listen(port, () => {
    console.log('Escuchando peticiones por el puerto ${port}');
});