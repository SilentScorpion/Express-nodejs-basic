const express = require('express');


const logger = require('./middleware/logger.js');
const path = require('path');

const app = express();


//Init middleware
//app.use(logger);

//Members API Routers

app.use('/api/members',require('./routes/api/members'));
app.use(express.static('./public'));


//Adding of json members, form submission, fetch() api all use POST()
//Middleware for body Parser(0)
app.use(express.json());


//Use express.static to serve static content as responses from the server

//Redirect
//routes
//render templates
//create a static api
app.listen(5000);