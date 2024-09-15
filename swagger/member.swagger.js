/**
 * @swagger
 * /api/v1/member:
 *   get:
 *     summary: Get a list of member with count of borrowed books
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: A list of member with count of borrowed books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Check the member success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Angga"
 *                       code:
 *                         type: string
 *                         example: "M001"
 *                       book_borrowed:
 *                         type: integer
 *                         example: 1
 *       500:
 *         description: Internal server error
 */
