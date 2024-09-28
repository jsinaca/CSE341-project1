const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'localhost:8080',
    schemes: ['http', 'https']
};

const ouputFile = './swagger.json';
const endpointsFiles = ['./api/routers/index.js'];

swaggerAutogen(ouputFile, endpointsFiles, doc);


