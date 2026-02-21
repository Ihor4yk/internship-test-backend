/**
 * @swagger
 * tags:
 *   name: Applications
 *   description: User applications API
 */

/**
 * @swagger
 * /applications:
 *   post:
 *     summary: Create application (public)
 *     tags: [Applications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Application created
 */

/**
 * @swagger
 * /applications:
 *   get:
 *     summary: Get all applications (admin)
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of applications
 */
