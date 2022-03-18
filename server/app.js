const http = require('http');

const host = 'localhost',
    port = 8080;

const listProducts = (req, res) => {};

const server = http.createServer(listProducts);
server.listen(port, host, () => {
    `Server is running on : http://${localhost}:${port}`;
});
