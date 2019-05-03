const countInterval = require('./index.js');

let runs = 10;
let milliseconds = 100;
let x = 0;
function cb(text) {
  if (text !== 'test') console.log('parameter passing failed');
  console.log(text, new Date(), ++x);
  if(x > runs) console.log('counted too high');
}

countInterval(cb, milliseconds, runs, 'test');

setTimeout(()=>{
  if(x<runs) console.log('did not count high enough');
},(runs+5)*milliseconds);
