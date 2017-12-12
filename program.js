const detectCharType = require('./detectCharType');

const initialState = {
    inputs: 0,
    currentCode: 0,
    text: ''
};

const setup = (stdIn) => {

    const stateStream = stdIn.scan((state,key) => {
        
        const preprocessedState = {
            ...state,
            inputs: state.inputs + 1,
            currentType: key.charCodeAt(0)
        }

        const charType = detectCharType.detect(key);

        switch (charType) {
            case detectCharType.PRINTABLE_ASCII:
                return {
                    ...preprocessedState,
                    text: preprocessedState.text + key,
                }
            case detectCharType.BACKSPACE:
                return {
                    ...preprocessedState,
                    text: preprocessedState.text.slice(0, -1),
                }
            default:
                return preprocessedState;
        }
    }, initialState).startWith(initialState)

    const outputStream = stateStream.map(state => {
        return `total inputs: ${state.inputs} | last input type: ${state.currentType}`
            + '\n' + state.text;
    });

    return outputStream;
}

module.exports = { setup }