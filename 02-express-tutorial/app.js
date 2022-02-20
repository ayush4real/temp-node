// Middlewares are functions that execute during requests to the browser.

const express = require('express');
const app = express();
const logger = require('./logger.js');
const authorize = require('./authorize.js');

// below line will apply logger to all the paths starting with /api (only).
// app.use('/api', logger);

app.use([logger, authorize]);

app.get('/', (req,res)=>{
    
    res.send('home');
})

app.get('/about', (req,res)=>{
    res.send('about');
})

app.get('/api/products', (req,res)=>{
    res.send('products');
})

app.get('/api/items', (req,res)=>{
    console.log(req.user);
    res.send('items');
})

app.listen(5000, ()=>{
    console.log('listening on port 5000...');
})
