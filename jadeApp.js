/**
 * Testing Jade
 */
const express = require('express');
//var logger = require('morgan');
const stylus = require('stylus');
const nib = require('nib');

var app = express()
function compile(){
    return stylus(str)
        .set('filename',path)
        .use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
//app.use(express.logger('dev-api'))
app.use(stylus.middleware(
    {   src: __dirname + '/public',
    compile: compile
    }))
app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
    res.render('learning',{title: 'Home' })

})
app.listen(8081,()=>{
	console.log("Server NODE JS escuchando en puerto: 8081");
});

//img(src="/img/byVisit.jpg", alt="myImage")
    