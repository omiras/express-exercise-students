const express = require('express');

// hemos instalado este módulo de terceros
// https://www.npmjs.com/package/is-palindrome
const isPalindrome = require('is-palindrome');


// importar custom module
const app = express();

app.get('/check', (req, res) => {
    const { palabra } = req.query;

    res.send(`La palabra ${palabra} ${isPalindrome(palabra) ? 'es' : '<strong>no es</strong>'} un palindromo.`);

});



app.use((req, res) => {
    res.status(404).send('<h1 style="color:blue">Error 404: no he encontrado lo que buscabas...</h1>')
})

app.listen(3000, (req, res) => {
    console.log(`Servidor ${__filename} funcionando correctamente`);
});