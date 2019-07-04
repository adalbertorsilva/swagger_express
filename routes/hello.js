const router = require('express').Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     helloPayload:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           maxLength: 2
 *         lastName:
 *           type: string
 *           maxLength: 50
 *       required: [firstName, lastName]
 *  
 *     helloUser:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         id:
 *           type: integer
 *           format: int32
 *       required: [id, firstName, lastName]
 */

 /**
  * @swagger
  * paths:
  *   /hello:
  *     post:
  *       summary: Creates a Hello User
  *       operationId: hello
  *       requestBody:
  *         description: Hello user to be created
  *         required: true
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/helloPayload'
  *       responses:
  *         200:
  *           description: Success response
  *           schema:
  *             $ref: '#/components/schemas/helloUser'
  */  
  
const hello = (req, res) => {
  const { firstName, lastName } = req.body

  const response = {
      firstName,
      lastName,
      id: 1
  }
  
  res.status(200).send(response)
}


router.post('/' ,hello)

module.exports = router