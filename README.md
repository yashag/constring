# constring
> Utility string constants

The package aims to solve several issues:
1. Code pollution - too many strings
2. Code readability - unclear strings
3. Memorization - no need to remember escaping and complicated strings (just their name, like: TAB)
4. Coolness - having a cool package in your code ;)


## Install
Install with [npm](https://www.npmjs.com/package/constring):

```sh
$ npm install --save constring
```

## Usage
Option 1:
```js
const constring = require('constring');

console.log(constring.HASH + constring.ONE + constring.EXCLAMATION);
// output: #1!
```

Option 2
```js
const { EMPTY, SPACE } = require('constring');

someFunction(EMPTY, SPACE);
```

## Values
------

### Whitespace
The `EOL` variable is the end of line field taken from the built in `os` package in the following manner:
```js
const EOL = require('os').EOL;
```

| Key | Value |
| ----- | ----- |
| EOL | `EOL` |
| NEW_LINE | `EOL` |
| TAB | `'\t'` |
| SPACE | `' '` |
| BACKSPACE | `'\b'` |
| CR | `'\r'` |
| LF | `'\n'` |
| CRLF | `'\r\n'` |


### Special Characters
| Key | Value | Escaped Value |
| ----- | ----- | ----- |
| EMPTY | `'\'` |
| APOSTROPHE | `'\''` | `'` |
| SINGLE_QUOTE | `'\''` | `'` |
| DOUBLE_QUOTE | `'\"'` | `"` |
| BACK_QUOTE | ``'\`'`` | `` ` `` |
| SLASH | `'/'` |
| FORWARD_SLASH | `'/'` |
| BACKSLASH | `'\\'` | `\` |
| DOT | `'.'` |
| COMMA | `','` |
| QUESTION | `'?'` |
| COLON | `':'` |
| SEMICOLON |  `';'` |
| PIPE | `'\|'` |
| TILDE | `'~'` |
| EXCLAMATION | `'!'` |
| AT |  `'@'` |
| HASH | `'#'` |
| DOLLAR | `'$'` |
| PERCENT | `'%'` |
| CARET | `'^'` |
| AMPERSAND | `'&'` |
| ASTERISK | `'*'` |
| OPEN_PARENTHESIS | `'('` |
| CLOSE_PARENTHESIS | `')'` |
| MINUS | `'-'` |
| HYPHEN | `'-'` |
| DASH | `'-'` |
| UNDERSCORE | `'_'` |
| PLUS | `'+'` |
| EQUAL | `'='` |
| ASSIGNMENT | `'='` |
| AND | `'&&'` |
| OR |`'\|\|'` |
| OPEN_BRACE | `'{'` |
| CLOSE_BRACE | `'}'` |
| OPEN_CURLY_BRACKET | `'{'` |
| CLOSE_CURLY_BRACKET | `'}'` |
| OPEN_BRACKET | `'['` |
| CLOSE_BRACKET | `']'` |
| OPEN_ANGLE_BRACKET | `'<'` |
| CLOSE_ANGLE_BRACKET | `'>'` |
| LESS_THAN | `'<'` |
| GREATER_THAN | `'>'` |


### Numeric
| Key | Value |
| ----- | ----- |
| ZERO | `'0'` |
| ONE | `'1'` |
| TWO | `'2'` |
| THREE | `'3'` |
| FOUR | `'4'` |
| FIVE | `'5'` |
| SIX | `'6'` |
| SEVEN | `'7'` |
| EIGHT | `'8'` |
| NINE | `'9'` |
| TEN |  `'10'` |

### Alphabet
From now on you can access all alphabet letters (uppercase and lowercase alike) programmatically.
No need for stringified single letters. It is very simple to use:
```js
const constring = require('constring');
console.log(constring.c + constring.o + constring.o + constring.l); // cool
```
OR
```js
const { W, O } = require('constring');
console.log(W + O + W); // WOW
```

## License

Copyright © 2017 Yasha Gootkin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.