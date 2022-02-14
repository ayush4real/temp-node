const {readFile} = require('fs');
console.log('started first task');

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if(err){
    console.log(err)
    return
  }
  console.log(result);
  console.log('firs task completed');
})
console.log('starting next task');