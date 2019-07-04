const openapi3middleware = require('openapi3-middleware')
const swaggerSpec = require('./swagger-spec')

const validatorInstance = openapi3middleware.validator(swaggerSpec)

module.exports = validatorInstance