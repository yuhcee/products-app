const http = require('http');
const guitars = require('./guitars.json');

const host = 'localhost';
const port = 8080;

const listProducts = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, 'OK');
    res.end(JSON.stringify(guitars, null, 2));
};

const server = http.createServer(listProducts);
server.listen(port, host, () => {
    console.log(`Server is running on : http://${host}:${port}`);
});
