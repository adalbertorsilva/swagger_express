const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerTools = require('swagger-tools')

const helloRouter = require('./routes/hello')
const swaggerDefinition = require('./swagger-definition')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const swaggerSpec = swaggerJSDoc(swaggerDefinition)

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/hello', helloRouter)

swaggerTools.initializeMiddleware(swaggerSpec, ( middleware ) => {

    app.use(middleware.swaggerValidator())

    app.listen(3000, () => {
        console.log('SERVER UP !')
    })
})

