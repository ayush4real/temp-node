const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// --------------MY CODE----------------
// const express = require('express');
// const app = express();
// const {products} = require('./data.js');

// app.get('/',(req,res)=>{
//     res.status(200).json(products);
// })

// app.listen(5000, ()=>{
//     console.log('Server is listening on port 5000...');
// })