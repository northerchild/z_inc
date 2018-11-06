const express = require('express');
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = 3000;

app.use(express.static(__dirname + '/public'))
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

app.get('/',(req, res)=> {
  //res.send('HolaData')
	res.render('home',{
	});
});

if (!port) {
	console.error("No se definio bien el puerto")
}else{
	console.log(`Escuchando desde el puerto ${port}`)	
}

app.listen(3000,()=>{

});