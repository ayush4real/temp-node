const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})

// -------------------MY CODE---------------------
// const express = require('express');
// const path = require('path');
// const app = express();

// // setup static and middleware
// app.use(express.static('./public'))


// // index.html is also a static asset
// // app.get('/',(req,res)=>{
// //     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
// //     adding to static assets
// //     SSR - we will be using template engine for that
// // })

// app.all('*',(req,res)=>{
//     res.status(404).send('Resource not found');
// })

// app.listen(5000, ()=>{
//     console.log('server is listening on port 5000...');
// })