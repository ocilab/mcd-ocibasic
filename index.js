const http = require(‘http’);
hostname = ‘0.0.0.0’;
const port = 3000;
const server = http.createServer((req, res) => {
   var currentDate = new Date();
   var utcDate = currentDate.toUTCString();
   res.statusCode = 200;
   res.setHeader(‘Content-Type’, ‘text/plain’);
   if(req.method === ‘GET’ && req.url === ‘/greeting’) {
      // This is the Hello World invocation
      res.end(‘Hello World\n’);
      console.log(‘Hello World invoked ‘ + utcDate);
   } else {
      // This is the health check from the load balancer
      res.end(‘Healthy\n’);
      //console.log(`Health check `+ utcDate);
   }
});
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});