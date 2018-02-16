
const http = require('http');
const fs = require('fs'); //jale ese codigo al archivo de JS, se usa const porque var es mucho y innecesario

http.createServer((request, response) =>{
    fs.readFile('./index.html',(err, html)=>{ //funcion anonima, conocido como callback. 
    response.write(html);
    response.end();
}); 

}).listen(3000);
//ctrl+c to stop server 
// node app.js to run server
//vi index.html
//nano index.html

