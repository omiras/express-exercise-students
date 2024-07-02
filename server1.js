// importamos el módulo de terceros Express
const express = require('express');

// Creamos una nueva instancia del servidor express
const app = express();

// Crear un endpoint a '/'
app.get('/', (req, res) => {
    // utilizamos el método res.send para enviar una respuesta al cliente
    res.send(`<h1>El servidor funciona correctamente</h1>
              <p>Aquí iría el contenido del mensaje</p>`);
})

// Tenemos que levantar el servidor y escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor 1 corriendo correctamente en puerto 3000');
});