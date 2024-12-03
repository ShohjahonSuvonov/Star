const { Router } = require('express');
const { getAllStars, createStar, getStarById, updateStar, deleteStar } = require('../controller/Star.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Initialize Swagger JSDoc
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Stars API',
      version: '1.0.0',
      description: 'API to manage stars in the universe',
    },
  },
  apis: ['./routes/star.routes.js'], // Path to your API routes
};

const swaggerSpec = swaggerJsdoc(options);

const router = Router();

/**
 * @swagger
 * /stars/all:
 *   get:
 *     summary: Get all stars
 *     responses:
 *       200:
 *         description: List of stars
 */
router.get('/stars/all', getAllStars);

/**
 * @swagger
 * /stars/create:
 *   post:
 *     summary: Create a new star
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               brightness:
 *                 type: number
 *     responses:
 *       201:
 *         description: Star created
 */
router.post('/stars/create', createStar);

/**
 * @swagger
 * /stars/{id}:
 *   get:
 *     summary: Get a star by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The star ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A star object
 *       404:
 *         description: Star not found
 */
router.get('/stars/:id', getStarById);

/**
 * @swagger
 * /stars/update/{id}:
 *   put:
 *     summary: Update a star's details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The star ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               brightness:
 *                 type: number
 *     responses:
 *       200:
 *         description: Star updated
 *       404:
 *         description: Star not found
 */
router.put('/stars/update/:id', updateStar);

/**
 * @swagger
 * /stars/delete/{id}:
 *   delete:
 *     summary: Delete a star by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The star ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Star deleted
 *       404:
 *         description: Star not found
 */
router.delete('/stars/delete/:id', deleteStar);

// Swagger UI route
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
