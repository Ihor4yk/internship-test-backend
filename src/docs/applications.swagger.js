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
 *     summary: Create application with optional image (public)
 *     tags: [Applications]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 description: User name
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User email
 *                 example: "john@example.com"
 *               message:
 *                 type: string
 *                 description: Optional message
 *                 example: "I am interested in this deal"
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Optional image file (jpg, png, gif, webp)
 *     responses:
 *       201:
 *         description: Application created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 message:
 *                   type: string
 *                 image_url:
 *                   type: string
 *                   description: Cloudinary image URL
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Bad request - validation error
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /applications:
 *   get:
 *     summary: Get all applications (requires authentication)
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all applications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   message:
 *                     type: string
 *                   image_url:
 *                     type: string
 *                     description: Cloudinary image URL (if uploaded)
 *                     nullable: true
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *       401:
 *         description: Unauthorized - missing or invalid token
 *       500:
 *         description: Server error
 */
