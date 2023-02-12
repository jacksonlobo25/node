const http = require('http')

http.createServer((request, response) =>{
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1>Server Homepage</h1>');
    }
    if(request.url === '/about'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1>About Page</h1>');
    }
}).listen(8080);