// ASCII art letters using 1s and 0s
const letters = {
  H: [
    '1   1',
    '1   1',
    '11111',
    '1   1',
    '1   1',
    '1   1',
    '1   1'
  ],
  E: [
    '11111',
    '1    ',
    '1    ',
    '1111 ',
    '1    ',
    '1    ',
    '11111'
  ],
  L: [
    '1    ',
    '1    ',
    '1    ',
    '1    ',
    '1    ',
    '1    ',
    '11111'
  ],
  O: [
    ' 111 ',
    '1   1',
    '1   1',
    '1   1',
    '1   1',
    '1   1',
    ' 111 '
  ],
  W: [
    '1   1',
    '1   1',
    '1   1',
    '1 0 1',
    '1 0 1',
    '10 01',
    '1   1'
  ],
  R: [
    '1111 ',
    '1   1',
    '1   1',
    '1111 ',
    '1 1  ',
    '1  1 ',
    '1   1'
  ],
  D: [
    '1111 ',
    '1   1',
    '1   1',
    '1   1',
    '1   1',
    '1   1',
    '1111 '
  ],
  ' ': [
    '  ',
    '  ',
    '  ',
    '  ',
    '  ',
    '  ',
    '  '
  ]
};

/**
 * Prints "HELLO WORLD" in ASCII art using 1s and 0s
 * @param {Object} options - Configuration options
 * @param {string} options.text - Custom text to display (default: 'HELLO WORLD')
 * @param {boolean} options.caseSensitive - Whether to preserve case (default: false, converts to uppercase)
 * @param {number} options.letterSpacing - Extra spaces between letters (default: 1)
 * @param {string} options.fillChar - Character to use for filled pixels (default: '1')
 * @param {string} options.emptyChar - Character to use for empty pixels (default: '0')
 */
function fancyHelloWorld(options = {}) {
  // Default options
  const config = {
    text: 'HELLO WORLD',
    caseSensitive: false,
    letterSpacing: 1,
    fillChar: '1',
    emptyChar: '0',
    ...options
  };

  // Convert to uppercase if not case sensitive
  const message = config.caseSensitive ? config.text : config.text.toUpperCase();
  const rows = 7;
  const spacing = ' '.repeat(config.letterSpacing);

  // Build each row by combining the corresponding row from each letter
  for (let row = 0; row < rows; row++) {
    let line = '';
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const letter = letters[char];
      if (letter) {
        // Replace 1s and 0s with custom characters if specified
        let letterRow = letter[row];
        if (config.fillChar !== '1' || config.emptyChar !== '0') {
          letterRow = letterRow
            .split('')
            .map(c => {
              if (c === '1') return config.fillChar;
              if (c === '0') return config.emptyChar;
              return ' ';
            })
            .join('');
        }
        line += letterRow + spacing;
      }
    }
    console.log(line);
  }
}

module.exports = { fancyHelloWorld };
