/**
 * @swagger
 * /api/v1/book/available:
 *   get:
 *     summary: Get a list of available books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of available books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Check the book success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: "Harry Potter and the Sorcerer's Stone"
 *                       code:
 *                         type: string
 *                         example: "JK-45"
 *                       stock:
 *                         type: integer
 *                         example: 1
 *       500:
 *         description: Internal server error
 */
