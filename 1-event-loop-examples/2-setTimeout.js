console.log('first');
// async callback func goes at back of the line, and immediate code is executed first
setTimeout(() => {
  console.log('second');
}, 0);

console.log('third');