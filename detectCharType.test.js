const assert = require('assert');
const detectCharType = require('./detectCharType');

['a','b','z','A','B','Z','0','1','9','!','&','?'].forEach(sample => {
    assert(
        detectCharType.detect(sample) === detectCharType.PRINTABLE_ASCII,
        `Character '${sample}' should be PRINTABLE_ASCII`
    )
})

['ö','ß','\u0003', String.fromCharCode(31)].forEach(sample => {
    assert(
        detectCharType.detect(sample) === detectCharType.OTHER,
        `Character '${sample}' should be OTHER`
    )
})

const enter = String.fromCharCode(13);

assert(
    detectCharType.detect(enter) === detectCharType.OTHER,
    `Character '${enter}' should be ENTER`
)

const backspace = String.fromCharCode(8);

assert(
    detectCharType.detect(backspace) === detectCharType.OTHER,
    `Character '${backspace}' should be BACKSPACE`
)