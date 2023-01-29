const http = require('http');

http.createServer((req, res) => {

    console.log(req);

    res.writeHead(200);

    res.write('404 | Page not found');
    res.end();

})
    .listen(8081);

console.log('Escuchando el puerto', 8081);