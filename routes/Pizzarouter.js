const express = require('express');

const router = express.Router();

module.exports = router;

const PizzasControllers = require('../controllers/PizzasControllers')
router.get('/', PizzasControllers.listar)
router.get('/pizzas/:id', PizzasControllers.mostrar)

