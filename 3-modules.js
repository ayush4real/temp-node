// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is a module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');

// below line will still print the sum as the function is invoked in the file.
require('./7-mind-grenade');
// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);