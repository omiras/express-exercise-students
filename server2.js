const express = require('express')

const path = require('path');

const app = express();

app.get("/mensaje", (req, res)=>{
    res.send(`
        <h1>El servidor funciona correctamente</h1>
        <p>Aquí iría el contenido del mensaje</p> `);
});

// vamos a capturar cualquier petición al servidor y vamos a responder con un mensaje indicando que la página/endpoint no existe
// app.use CAPTURA cualquier verbo HTTP (GET, POST, ....)
app.use((req, res)=>{
    const route404 = path.join(__dirname, "404.html");
    res.status(404).sendFile(route404);
});

app.listen(3000, (req, res)=>{
    console.log("Servidor escuchando en http://localhost:3000")
})