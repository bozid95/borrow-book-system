/**
 * @swagger
 * /api/v1/borrow-book:
 *   post:
 *     summary: Borrow a book
 *     tags: [Borrowing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               member_id:
 *                 type: integer
 *                 example: 1
 *               book_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Borrow book successfully
 *       500:
 *         description: Internal server error
 *       400:
 *         description: Member cannot borrow more than 2 books,
 *                      Member is currently punished and cannot borrow books.
 *       404:
 *         description: Member or book not found
 */

/**
 * @swagger
 * /api/v1/return-book:
 *   post:
 *     summary: Return a book
 *     tags: [Borrowing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               member_id:
 *                 type: integer
 *                 example: 1
 *               book_id:
 *                 type: integer
 *                 example: 1
 *               return_date:
 *                 type: date
 *                 example: 2024-09-16
 *     responses:
 *       201:
 *         description: Return book successfully
 *       500:
 *         description: Internal server error
 *       400:
 *         description: This book was not borrowed by this member.
 *       404:
 *         description: Member or book not found
 */
