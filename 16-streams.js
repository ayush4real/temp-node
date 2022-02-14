const {createReadStream} = require('fs');
const stream = createReadStream('/content/big.txt', {highWatermark: 90000, encoding: 'utf8'});

// Default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt',{highWaterMark: 9000})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})