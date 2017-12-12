const PRINTABLE_ASCII = Symbol();
const BACKSPACE = Symbol();
const ENTER = Symbol();
const OTHER = Symbol();

const detect = (key) => {

    const keyCode = key.charCodeAt(0);

    if (keyCode > 31 && keyCode < 127) {
        return PRINTABLE_ASCII;
    }

    switch (keyCode) {
        case 8:
            return BACKSPACE;
        case 13:
            return ENTER;
        default:
            return OTHER;
    }

}

module.exports = {
    detect,
    PRINTABLE_ASCII,
    ENTER,
    BACKSPACE,
    OTHER
}