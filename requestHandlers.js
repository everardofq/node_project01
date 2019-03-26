function iniciar(response){
	console.log("Manipulador de peticion 'iniciar' a sido llamdo.");

	var body = '<html>'+
'<head>'+
'<meta http‐equiv="Content‐Type" content="text/html;charset=UTF‐8" />'+
'</head>'+
'<body>'+
'<form action="/subir" method="post">'+
'<textarea name="text" rows="20" cols="60"></textarea>'+
'<input type="submit" value="Enviar texto" />'+
'</form>'+
'</body>'+
'</html>';

	response.writeHead(200,{"Content-Type": "text/html" });
	response.write(body);
	response.end();
}

function subir(response){
	console.log("Manipulador de peticion 'subir' a sido llamdo.");
	var body = '<html>'+
'<head>'+
'<meta http‐equiv="Content‐Type" content="text/html;charset=UTF‐8" />'+
'<head><title>subir</title></head>'+
'<body>'+
'<h1>Hola subir!!</h1>'
'</body>'+
'</html>';

	response.writeHead(200,{"Content-Type": "text/html" });
	response.write(body);
	response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;