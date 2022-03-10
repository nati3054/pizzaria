const express = require('express');

const app = express();

const porta = 3000;

const Pizzarouter = require('./routes/Pizzarouter');



const path = require('path');
const router = require('./routes/Pizzarouter');

app.set('view enrige','ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Pizzarouter)

// app.get('/test', (req,res)=>{
//     res.render('../views/pizza.ejs')
// })
app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`)
});