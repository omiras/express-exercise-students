const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send(`
    <html>
    <head>
    <link rel="stylesheet" href="/estilos.css">
    </head>
    <body>
    <form class="form" method="POST" action="/">
    <label for="name" class="label-name">Name</label>
    <input type="text" id="name" name="name" maxlength="40" class="field field-name" />
  
    <label for="email" class="label-email">Email Address</label>
    <input type="email" id="email" name="email" maxlength="40" class="field field-email" />
  
    <label for="message" class="label-message">Message</label>
    <textarea id="message" name="message" cols="30" rows="5" maxlength="400" class="field field-message"></textarea>
  
    <input type="submit" value="Send Message" class="button" />
  </form>
  </body>
    </html>
  `)
})

app.use((req, res) => {
    res.status(404).send('Recurso no encontrado...')
  })

app.listen(3000)
  