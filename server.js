const express = require('express');
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.port 3000;

app.use(express.static(__dirname + '/public'))
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


if (!port) {
	console.error("No se definio bien el puerto")
}else{
	console.log(`Escuchando desde el puerto ${port}`)	
}