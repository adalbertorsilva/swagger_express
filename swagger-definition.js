const definition = {
  info: {
      title: 'Hello API',
      version: '1.0.0',
      description: 'Swagger Spike'
  },
  host: 'localhost:3000',
  basePath: '/',
}

module.exports = {
  definition,
  apis: ['./routes/*.js']
}