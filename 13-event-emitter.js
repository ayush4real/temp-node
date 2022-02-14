const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - will emit an event
customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with ${id}`);
})
customEmitter.on('response', ()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response', 'john', 34);