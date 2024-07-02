const express = require('express');
const path = require('path');
const app = express();

app.get('/team', (req, res) => {
    // usamos el módulo interno path.join para construir la ruta al fichero
    const url = path.join(__dirname, 'server3-files', 'team.html');
    res.sendFile(url);
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/server3-files/about.html');
})

app.use((req, res) => {
    res.status(404).send('<h1 style="color:blue">Error 404: no he encontrado lo que buscabas...</h1>')
})

app.listen(3000, (req, res) => {
    console.log(`Servidor ${__filename} funcionando correctamente`);
});