const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send(`<h1>El servidor funciona correctamente</h1>
        <p>
        Aquí iría el contenido del mensaje. Bla Bla Bla
        </p>`) 
})

app.listen(3005, ()=> {
    console.log('Server one listens on Port 3005')
})