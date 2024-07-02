// importamos el módulo de terceros Express
const express = require('express');

// módulo buil-in path
const path = require('path');

// importar custom module
const utils = require('./utils/palindrome/index.js');

// Creamos una nueva instancia del servidor express
const app = express();

// Creamos una ruta dinámica con /check/:word
app.get('/check/:word', (req, res) => {

    // El hecho de guardar lo que te viene del parámetro :word en una variable clarifica lo que vamos a hacer
    const word = req.params.word;
    console.log("🚀 ~ file: server4.js:18 ~ app.get ~ word:", word)

    // usamos la función 'palindrome' del custom module 'utils'
    const isPalindrome = utils.palindrome(word);
    console.log("🚀 ~ file: server4.js:21 ~ app.get ~ isPalindrome:", isPalindrome)

    // Si es true es que es un palindromo en caso contrario es que no lo es
    if (isPalindrome) {
        res.send(`<h1>La palabra ${word} es un palindromo</h1>`);
    } else {
        res.send(`<h1>La palabra ${word} <span style="color:red">NO es</span> un palíngromo</h1>`)
    }

});

// Devolver un 404
app.use((req, res) => {
    res.status(404).send('No he encontrado lo que buscabas...404');
});

// Tenemos que levantar el servidor y escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor 4 corriendo correctamente en puerto 3000');
});