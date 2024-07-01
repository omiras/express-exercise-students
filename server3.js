//import built-in package path to use it to create the routes
const path = require('path');

const express = require('express');

const app = express();

const team = path.join(__dirname, 'server3-files', 'team.html');
const about = path.join(__dirname, 'server3-files', 'about.html');

app.get('/team', (req, res, next) =>{
    res.sendFile(team); 
})

app.get('/about', (req, res, next) =>{
    res.sendFile(about) ;
})

app.use((req, res) => {
    res.status(404).send(`<p>No such page</p>`);
})

app.listen(3005, ()=>{
    console.log('listens at 3005 server 3')
})