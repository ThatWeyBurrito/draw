
const http = require('http');
const fs = require('fs'); //jale ese codigo al archivo de JS, se usa const porque var es mucho y innecesario
const log4js = require('log4js');

const logger = log4js.getLogger(); //https://www.npmjs.com/package/log4js de alli viene los instrucciones
logger.level = 'debug';

http.createServer((request, response) =>{
    fs.readFile('./index.html',(err, html)=>{ //funcion anonima, conocido como callback. 
    
        logger.info("Conexion a la aplicacion");
    if(err){
        logger.warn("404 - not Found");
        response.writeHead(404,{
            'Content-Type': 'text/html'});
        response.write("404 - not found");
        response.end();
    } else{
        logger.info('200 - ok');
        response.write(html);
        response.end();
    }
}); 

}).listen(3000);
//ctrl+c to stop server 
// node app.js to run server
//vi index.html
//nano index.html