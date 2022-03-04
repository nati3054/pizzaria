const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Olá, visitante!')
});

app.listen(porta, () => {
    console.log(`Servidor Rodando na porta ${porta}`)
});