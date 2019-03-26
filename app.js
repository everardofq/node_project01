const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var routes = require('./routes/index');

const app = express();

//view engine setup
//app.set('views',path.join(__dirname, 'views'));

// create application json parser
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: false}));

//Asignando a Jade como moter de vistas
app.set("view engine", "jade");

//Dirigimos las peticiones get a nuestro archivo routes/index
app.use('/',routes);

//Manejo de errores cuando una ruta no es encontrada
app.use( function(req, res, next){
     var err = new Error('Not Found that route');
     err.status = 404;
     next(err);

    //Error will be deployed when one route was not found
    //next('Error 404 not found');
});


app.listen(8081, ()=>{
	console.log("Server NODE JS escuchando en puerto: 8081");
});