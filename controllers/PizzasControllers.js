const PizzasControllers = {
    listar:(req, res)=>{
     res.render('pizzas.ejs', {pizzas})
    }
};

const pizzas = require('../database/Pizzas.json')

module.exports = PizzasControllers;