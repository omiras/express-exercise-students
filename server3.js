// importamos el módulo de terceros Express
const express = require('express');

// módulo buil-in path
const path = require('path');

// Creamos una nueva instancia del servidor express
const app = express();

// Crear un endpoint a '/team'
app.get('/team', (req, res) => {
    res.sendFile(__dirname + '/server3-files/team.html')
})

// Crear un endpoint a '/about'
app.get('/about', (req, res) => {
    const url = path.join(__dirname, 'server3-files', 'about.html');
    res.sendFile(url);
});

// Devolver un 404
app.use((req, res) => {
    res.status(404).send('No he encontrado lo que buscabas...404');
});

// Tenemos que levantar el servidor y escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor 3 corriendo correctamente en puerto 3000');
});