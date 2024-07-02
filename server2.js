// importamos el módulo de terceros Express
const express = require('express');

// Creamos una nueva instancia del servidor express
const app = express();

// Crear un endpoint a '/'
app.get('/mensaje', (req, res) => {
    // utilizamos el método res.send para enviar una respuesta al cliente
    res.send(`<h1>El servidor funciona correctamente</h1>
              <p>Aquí iría el contenido del mensaje</p>`);
})

// Devolver un 404
app.use((req, res) => {
    res.status(404).send('No he encontrado lo que buscabas...404');
});

// Tenemos que levantar el servidor y escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor 2 corriendo correctamente en puerto 3000');
});