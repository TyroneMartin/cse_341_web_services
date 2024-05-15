const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: ['localhost:8080', 'https://dashboard.render.com/web/srv-cmlho77109ks7392h2p0']
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);