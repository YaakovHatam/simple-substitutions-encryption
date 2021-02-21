const SECRET_KEYS = {}
const FIRST_LETTER = [65, 97];
const LEN = 25;
let start = [...FIRST_LETTER];
let end = start.map(s => s + LEN);

while (FIRST_LETTER[0] - 1 != end[0]) {
    SECRET_KEYS[String.fromCharCode(start[0]++)] = String.fromCharCode(end[0]--)
    SECRET_KEYS[String.fromCharCode(start[1]++)] = String.fromCharCode(end[1]--)
}
const INVERTED_SECRET_KEYS = Object.keys(SECRET_KEYS).reduce((obj, key) => {
    obj[SECRET_KEYS[key]] = key;
    return obj;
}, {});

function swap(someString, swapArray) {
    let ret = '';
    for (let i = 0; i < someString.length; i++) {
        ret += swapArray[someString[i]] ? swapArray[someString[i]] : someString[i];
    }
    return ret;
}

function encode(someString, callback) {
    callback(null, swap(someString, SECRET_KEYS));
}

function decode(someString, callback) {
    callback(null, swap(someString, INVERTED_SECRET_KEYS));
}

module.exports.encode = encode;
module.exports.decode = decode;
