const router = require('express').Router()

/**
 * @swagger
 * definitions:
 *  helloPayload:
 *    type: object
 *    properties:
 *      firstName:
 *        type: string
 *      lastName:
 *        type: string
 *    required:
 *      - firstName
 *      - lastName
 * 
 *  helloUser:
 *    type: object
 *    properties:
 *      firstName:
 *        type: string
 *      lastName:
 *        type: string
 *      id:
 *        type: integer
 *        format: int32
 *    required:
 *      - id
 *      - firstName
 *      - lastName
 */

 /**
  * @swagger
  * /hello:
  *   post:
  *     summary: Creates a Hello User
  *     produces: 
  *       - application/json
  *     consumes:
  *       - application/json
  *     parameters:
  *       - in: body
  *         schema:
  *           $ref: '#/definitions/helloPayload'
  *           type: object
  *           properties:
  *             firstName:
  *               type: string
  *             lastName:
  *               type: string
  *         required:
  *           - firstName
  *           - lastName
  *     responses:
  *       200:
  *         description: Success response
  *         schema:
  *           $ref: '#/definitions/helloUser'
  */


router.post('/', (req, res) => {
  const { firstName, lastName } = req.body

  const response = {
      firstName,
      lastName,
      id: 1
  }
  
  res.status(200).send(response)
})

module.exports = router