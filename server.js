const http =  require('http');
const url = require('url');

function iniciar(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Peticion "+ pathname +" recibida!!")

		route(handle,pathname,response);
	}

	//estamos pasando a la funcion createServer na funcion definida
	http.createServer(onRequest).listen(8081);
	console.log("Server NodeJs escuchando en puerto:8081");
}

exports.iniciar = iniciar;
