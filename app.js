const express = require('express');

const app = express();

const porta = 3000;

const Pizzarouter = require('./routes/Pizzarouter');



const path = require('path')

app.set('view enrige','ejs')

app.use('/', Pizzarouter)

app.use(express.static(path.join(__dirname, 'public')));

app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`)
});