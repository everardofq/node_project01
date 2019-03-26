var express =  require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', (req, res)=>{
    // fs.readFile("./views/index.html", function(err,html){
    //     var html_str = html.toString();
    //     //expresion regular que devuelve las variables del archivo html
    //     var variables = html_str.match(/[^\{\}]+(?=\})/g);
    //     let nombre = "Everardo y Liliana";

    //     for(var i= variables.length - 1; i >= 0;  i--){
    //         //eval() obtiene el valor de la variable pasada como parametro
    //         var value = eval(variables[i]);
    //         html_str = html_str.replace("{"+variables[i]+"}", value);
    //     }

    //     res.writeHead(200,{"Content-Type": "text/html"});
    //     res.write(html_str);
    //     res.end();
    // });
    
    //Ahora con Jade
    res.render("index",{mensaje: "Everardo"})


});

router.post('/datos',function(req,res){
    console.log(req);
    res.render("form",{mensaje: "Everardo"})
});


router.get('/envio', (req, res, next)=>{
    res.send(`Hello again ${req.params.nombre}`);
});

//comunmente utilizado para obtener datos
router.get('/users', (req, res, next)=>{
    res.send('Hello users page');
});

//comunmente utilizado para registrar datos
router.post('/users',(req,res)=>{
	let body = req.body;
	res.json({
        usuario:body,
        message: `The user will be inserted` 
    });
    //res.send('The message was received')

});

//comunmente utilizado para actualizar datos
router.put('/users/:id',(req,res)=>{
	/*De params se toma la variable id porque es como la definimos en la entrada 
	(/usuario/:id)
	*/
	let id = req.params.id;
	res.json({
        id,
        message: `The user with id ${id} will be updated` 
	}); 
});

//comunmente utilizado para eleiminar datos (dar de baja)
router.delete('/users/:id',(req,res)=>{
	/*De params se toma la variable id porque es como la definimos en la entrada 
	(/usuario/:id)
	*/
	let id = req.params.id;
	res.json({
        id,
        message: `The user with id ${id} will be deleted` 
	}); 
});

router.get('/cars', (req, res, next)=>{
    res.send('Hello cars page');
});

//exportacion para que app.js pueda invocarlo
module.exports = router;
