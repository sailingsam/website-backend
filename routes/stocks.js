const express = require('express')
const router = express.Router()
const { addNewStock, fetchStocks } = require('../controllers/stocksController')
const { createStock } = require('../middlewares/validators/stocks')

/**
 * @swagger
 * /stocks:
 *  get:
 *   summary: Used to get all the stocks
 *   tags:
 *     - Stocks
 *   responses:
 *     200:
 *       description: returns stocks
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/stocks'
 *     500:
 *       description: badImplementation
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/errors/badImplementation'
 */

router.get('/', fetchStocks)

/**
 * @swagger
 * /stocks:
 *  post:
 *   summary: Used to create new stock
 *   tags:
 *     - Stocks
 *   requestBody:
 *     description: Stock data
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/stocks'
 *   responses:
 *     200:
 *       description: returns newly created stock
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/stocks'
 *     500:
 *       description: badImplementation
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/errors/badImplementation'
 */
router.post('/', createStock, addNewStock)

module.exports = router
