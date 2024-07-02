const express = require('express');


// importar custom module
const { palindrome } = require('./utils/palindrome/index.js');
const app = express();

app.get('/check/:word', (req, res) => {
    const word = req.params.word;
    console.log("🚀 ~ file: server4.js:10 ~ app.get ~ word:", word)
    const isPalindrom = palindrome(word);

    res.send(`La palabra ${word} ${isPalindrom ? 'es' : '<strong>no es</strong>'} un palindromo.`);

});



app.use((req, res) => {
    res.status(404).send('<h1 style="color:blue">Error 404: no he encontrado lo que buscabas...</h1>')
})

app.listen(3000, (req, res) => {
    console.log(`Servidor ${__filename} funcionando correctamente`);
});