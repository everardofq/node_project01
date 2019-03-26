var server  = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

//inyectando la funcion de ruteo de nuestro router a nuestro servidor
server.iniciar(router.route,handle);

