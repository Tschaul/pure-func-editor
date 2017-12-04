const initialState = 0;

const setup = (stdIn) => {

    const stateStream = stdIn.scan((state,key)=>{
        return key.charCodeAt(0);
    }, initialState)

    const outputStream = stateStream.map(state => {
        return 'last character: ' + state;
    });

    return outputStream;
}

module.exports = { setup }