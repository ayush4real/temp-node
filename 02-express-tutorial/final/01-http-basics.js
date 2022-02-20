const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)

// ------------------------My Code --------------------------------
// const http = require('http');
// const {readFileSync} = require('fs');

// // get all files
// const homePage = readFileSync('./navbar-app/index.html', 'utf-8');
// const homeStyles = readFileSync('./navbar-app/styles.css', 'utf-8');
// const homeImage = readFileSync('./navbar-app/logo.svg', 'utf-8');
// const homeLogic = readFileSync('./navbar-app/browser-app.js', 'utf-8');

// const server = http.createServer((req,res) => {
//     // console.log(req);
//     const url = req.url;
//     console.log(url);
//     // home page 
//     if(url === '/'){
//         console.log(req.url);
//         res.writeHead(200, {'content-type': 'text/html'})
//         res.write(homePage)
//         res.end();
//         return;
//     }
//     // about page
//     else if(url === '/about'){
//         console.log(req.url);
//         res.writeHead(200, {'content-type': 'text/html'})
//         res.write('<h1>about page</h1>')
//         res.end();
//         return;
//     }
//     // css
//     else if(url === '/styles.css'){
//         console.log(req.url);
//         res.writeHead(200, {'content-type': 'text/css'})
//         res.write(homeStyles);
//         res.end();
//         return;
//     }
//     // logic js
//     else if(url === '/browser-app.js'){
//         console.log(req.url);
//         res.writeHead(200, {'content-type': 'text/javascript'})
//         res.write(homeLogic);
//         res.end();
//         return;
//     }
//     // logo img
//     else if(url === '/logo.svg'){
//         console.log(req.url);
//         res.writeHead(200, {'content-type': 'image/svg+xml'})
//         res.write(homeImage);
//         res.end();
//         return;
//     }
//     // favicon
//     else if(url === '/favicon.ico'){
//         res.writeHead(200, {'content-type': 'image/x-icon'});
//         res.end();
//         return
//     // 404 resource not found
//     }else{
//         res.writeHead(404, {'content-type': 'text/html'})
//         res.write('<h1>Page not found</h1>')
//         res.end();
//         return;
//     }
// });

// server.listen(5000);