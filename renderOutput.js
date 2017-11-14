const readline = require('readline');

function renderOutput(output) {
    //readline.clearLine(process.stdout);
    //
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    process.stdout.write(output);
    readline.cursorTo(process.stdout, 0, 0);
    process.stderr.write('\x1B[?25l');
}

module.exports = renderOutput;