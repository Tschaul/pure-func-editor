const fromStream = require('./fromStream');
const renderOutput = require('./renderOutput')
const program = require('./program');

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

const stdIn = fromStream(process.stdin,'end','data');

stdIn.subscribe((key) => {
    if ( key === '\u0003' ) {
        process.stdout.write('\x1B[?25h'); 
        process.exit();
    }
});

const outputStream = program.setup(stdIn);

outputStream.subscribe((output) => {
    renderOutput(output);
});



