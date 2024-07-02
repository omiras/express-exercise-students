const express = require('express');

const app = express();

app.get('/mensaje', (req, res) => {
    res.send(`
        <h1>El servidor funciona correctamente</h1>
        <p>Aquí iría el contenido del mensaje</p> `)
});

app.use((req, res) => {
    res.status(404).send('<h1 style="color:blue">Error 404: no he encontrado lo que buscabas...</h1>')
})

app.listen(3000, (req, res) => {
    console.log("Servidor funcionando correctamente en puerto 3000");
});