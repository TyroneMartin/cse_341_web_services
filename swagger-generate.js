const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: ['localhost:8080', 'https://cse-341-web-services-imke.onrender.com']
};

// const outputFile = './swagger-output.json';
const outputFile = './swagger.json';

const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);