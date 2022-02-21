const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// ------------------MY CODE----------------------
// Middlewares are functions that execute during requests to the browser.

// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const logger = require('./logger.js');
// const authorize = require('./authorize.js');

// // req => middleware => res

// // 1. use of route
// // 2. options - our own / express / third party

// // below line will apply logger to all the paths starting with /api (only).
// // app.use('/api', logger);

// // app.use([logger, authorize]);
// app.use(morgan('tiny'));

// app.get('/', (req,res)=>{
    
//     res.send('home');
// })

// app.get('/about', (req,res)=>{
//     res.send('about');
// })

// app.get('/api/products', (req,res)=>{
//     res.send('products');
// })

// app.get('/api/items',(req,res)=>{
//     console.log(req.user);
//     res.send('items');
// })

// app.listen(5000, ()=>{
//     console.log('listening on port 5000...');
// })
