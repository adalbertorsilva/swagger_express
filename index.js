const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

const helloRouter = require('./routes/hello')
const swaggerSpec = require('./swagger-spec')
const swaggerValidator = require('./swagger-validator')

const app = express()

const getRequestStub = (req) => {
    const { url, method, body, headers } = req
    const path = Object.keys(swaggerSpec.paths).find(path => path === url)
    const action = Object.keys(swaggerSpec.paths[path]).find(action => action === method.toLowerCase())
    const { operationId } = swaggerSpec.paths[path][action]
    return {
      operationId,
      method,
      body,
      headers,
      path: url,
      route: {
        path: url
      }
    }
}

const validatePayload = (req, res, next) => {
    const stub = getRequestStub(req)
    try {
      swaggerValidator.validateRequest(stub, stub.operationId)
    } catch (error) {
      res.status(403).send({message: `${error.meta.in}${error.meta.rawErrors[0].error}`})
    }
    next()
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(validatePayload)

app.use('/hello', helloRouter)

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})

app.listen(3000, () => {
    console.log('SERVER UP !')
})
