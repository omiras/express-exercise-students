const express = require('express')

const path = require('path');

const app = express();

console.log("variable __dirname: ", __dirname);
console.log("variable __filename: ", __filename);


app.get("/about", (req, res)=>{
    const aboutPath = path.join(__dirname, "server3-files", "about.html");
    res.sendFile(aboutPath);
});

app.get("/team", (req, res)=>{
    const teamPath = path.join(__dirname, "server3-files", "team.html");
    res.sendFile(teamPath);
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