/**
 * @swagger
 * tags:
 *   name: Deals
 *   description: Real estate deals API
 */

/**
 * @swagger
 * /deals:
 *   get:
 *     summary: Get all available deals (public)
 *     tags: [Deals]
 *     responses:
 *       200:
 *         description: List of all deals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Al Yaqoub Tower"
 *                   image:
 *                     type: string
 *                     format: url
 *                     description: Cloudinary image URL
 *                     example: "https://res.cloudinary.com/dluw13qqi/image/upload/v1771852046/internship-test/deals/al-yaqoub.jpg"
 *                   price:
 *                     type: number
 *                     format: float
 *                     description: Property price in USD
 *                     example: 500000.00
 *                   ticket:
 *                     type: number
 *                     format: float
 *                     description: Minimum investment amount
 *                     example: 10000.00
 *                   yield_percent:
 *                     type: number
 *                     format: float
 *                     description: Expected annual yield percentage
 *                     example: 8.50
 *                   days_left:
 *                     type: integer
 *                     description: Days until deal closes
 *                     example: 45
 *                   sold_percent:
 *                     type: integer
 *                     description: Percentage of deal sold (0-100)
 *                     example: 65
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *       404:
 *         description: No deals found
 *       500:
 *         description: Server error
 */
