const fromStream = require('./fromStream');
const renderOutput = require('./renderOutput')

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

var stdIn = fromStream(process.stdin,'end','data');

stdIn.subscribe((key) => {
    if ( key === '\u0003' ) {
        process.stdout.write('\x1B[?25h'); 
        process.exit();
    }
});

stdIn.subscribe((key) => {
    renderOutput(key);
});




