//const path = require('path');
//const express = require('express');

//import path from 'path';

import express  from 'express';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000

app.use(express.static('dist'))
// app.engine('.hbs', engine({extname: '.hbs', partialsDir: './src/partials'}));
// app.set('view engine', '.hbs');
// app.set('views', './src/views');



// app.get('/', (request, response) => {
//   response.render('home', {
//       name: 'John'
//   })
// })

// app.get('/1', (request, response) => {
//   response.render('test', {
//       name: 'John'
//   })
// })

app.listen(port, (err) => {
    if (err) {
        return console.error('error', err)
    }

    console.log(`server is listening on ${port}`)
})
