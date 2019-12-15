const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
	return new Date().getFullYear();
});

app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'Nicolas'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		nombre: 'Nicolas'
	});
});

app.get('/data', (req, res) => {
	res.send('Hola Mundo Express!');
})

app.listen(port, () => {
	console.log('Example app listening on port 3000!');
});
