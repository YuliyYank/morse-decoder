const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    var result = '';
    var keys = Object.keys(MORSE_TABLE);
  
    var decodeTable = {};
  
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
  
      var keyDecodeArr = key.split('').map(x => {
        if (x === '-') {
          return '11';
        } else if (x === '.') {
          return '10';
        } else {
          return x;
        }
      });
  
      var decodeKey = keyDecodeArr.join('').padStart(10, '0');
      decodeTable[decodeKey] = MORSE_TABLE[key];
    }
  
    for (var i = 0; i < expr.length / 10; i++) {
      var encodedChar = expr.slice(10 * i, 10 * i + 10);
      var decodedChar = decodeTable[encodedChar];
      result += decodedChar;
    }
    
    return result;
}

module.exports = {
    decode
}