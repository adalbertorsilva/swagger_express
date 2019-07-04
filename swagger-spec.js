const swaggerJsDoc = require('swagger-jsdoc')

const definition = {
  openapi: '3.0.0',
  info: {
      title: 'Hello API',
      version: '1.0.0',
      description: 'Swagger Spike'
  },
  servers: [
    {
      url: 'http://localhost:3000/'
    }
  ],
}

const opts = {
  definition,
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJsDoc(opts)

module.exports = swaggerSpec