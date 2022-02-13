// npm - global command
// npm --version

// local dependency - use it only in this particular project
// npm i <packaageName>

// global depedency - use it in any project
// npm i -g <packaageName>

// package.json - manifest file, info about our project
// npm init
// npm init -y

const _ = require('lodash');

const items = [1,[2,[3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);