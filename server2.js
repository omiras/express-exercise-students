const express = require('express');

const app = express();

app.get('/mensaje', (req, res, next) =>{
    res.send(`<h1>El servidor funciona correctamente</h1>
        <p>
        Aquí iría el contenido del mensaje del servidor 2.
        </p>`) 
})

app.use((req, res) => {
    res.status(404).send(`<p>No such page</p>`);
})

app.listen(3005, ()=>{
    console.log('listens at 3005 server 2')
})