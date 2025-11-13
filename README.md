# Fancy Hello World

_This library was created for demo purposes for context7._

A fun JavaScript library that prints "Hello World" (or any custom text) in ASCII art using 1s and 0s, with customizable characters and styling options.

## Installation

```bash
npm install fancyhelloworld-demo
```

Or if using locally:

```bash
npm install
```

## Basic Usage

```javascript
const { fancyHelloWorld } = require("fancyhelloworld-demo");

// Print "HELLO WORLD" in ASCII art with 1s and 0s
fancyHelloWorld();
```

**Output:**

```
1   1 11111 1     1      111   1   1  111  1111  1     1111
1   1 1     1     1     1   1  1   1 1   1 1   1 1     1   1
11111 1111  1     1     1   1  1   1 1   1 1111  1     1   1
1   1 1     1     1     1   1  1 0 1 1   1 1 1   1     1   1
1   1 1     1     1     1   1  1 0 1 1   1 1  1  1     1   1
1   1 1     1     1     1   1  10 01 1   1 1   1 1     1   1
1   1 11111 11111 11111  111   1   1  111  1   1 11111 1111
```

## Configuration Options

The `fancyHelloWorld()` function accepts an options object with the following properties:

| Option          | Type    | Default         | Description                                                 |
| --------------- | ------- | --------------- | ----------------------------------------------------------- |
| `text`          | string  | `'HELLO WORLD'` | Custom text to display                                      |
| `caseSensitive` | boolean | `false`         | Whether to preserve case (converts to uppercase by default) |
| `letterSpacing` | number  | `1`             | Extra spaces between letters                                |
| `fillChar`      | string  | `'1'`           | Character to use for filled pixels                          |
| `emptyChar`     | string  | `'0'`           | Character to use for empty pixels                           |

## Examples

### Example 1: Custom Text (Case-Insensitive)

```javascript
const { fancyHelloWorld } = require("fancyhelloworld-demo");

// Works with lowercase, uppercase, or mixed case
fancyHelloWorld({ text: "hello world" });
fancyHelloWorld({ text: "HELLO" });
fancyHelloWorld({ text: "WoRLd" });
```

All three will be converted to uppercase and displayed correctly.

### Example 2: Custom Characters (Block Style)

```javascript
const { fancyHelloWorld } = require("fancyhelloworld-demo");

// Use block characters for a solid look
fancyHelloWorld({
  text: "HELLO",
  fillChar: "█",
  emptyChar: "░",
});
```

**Output:**

```
█   █ █████ █     █      ███
█   █ █     █     █     █   █
█████ ████  █     █     █   █
█   █ █     █     █     █   █
█   █ █     █     █     █   █
█   █ █     █     █     █   █
█   █ █████ █████ █████  ███
```

### Example 3: Asterisks and Dots

```javascript
const { fancyHelloWorld } = require("fancyhelloworld-demo");

// Use asterisks and dots for a classic look
fancyHelloWorld({
  text: "WORLD",
  fillChar: "*",
  emptyChar: ".",
});
```

**Output:**

```
*   * .*** ***** *     ****
*   * *   * *   * *     *   *
*   * *   * *   * *     *   *
* . * *   * *   * *     *   *
* . * *   * *   * *     *   *
** ** *   * *   * *     *   *
*   * .*** ***** ***** ****
```

### Example 4: Increased Letter Spacing

```javascript
const { fancyHelloWorld } = require("fancyhelloworld-demo");

// Add more space between letters for better readability
fancyHelloWorld({
  text: "HELLO",
  letterSpacing: 3,
});
```

This will add 3 spaces between each letter instead of the default 1.

### Example 5: Emoji Style

```javascript
const { fancyHelloWorld } = require("fancyhelloworld-demo");

// Use emojis for a fun look
fancyHelloWorld({
  text: "HELLO",
  fillChar: "🔥",
  emptyChar: "💧",
});
```

### Example 6: Hash and Dash Style

```javascript
const { fancyHelloWorld } = require("fancyhelloworld-demo");

// Programming/terminal style
fancyHelloWorld({
  text: "HELLO",
  fillChar: "#",
  emptyChar: "-",
  letterSpacing: 2,
});
```

### Example 7: X and O Pattern

```javascript
const { fancyHelloWorld } = require("fancyhelloworld-demo");

// Tic-tac-toe style
fancyHelloWorld({
  text: "WORLD",
  fillChar: "X",
  emptyChar: "O",
});
```

## Supported Characters

Currently supported letters:

- **Letters:** H, E, L, O, W, R, D
- **Special:** Space

More letters can be added to the library by extending the `letters` object in the source code.

## API Reference

### `fancyHelloWorld(options)`

Prints text in ASCII art using 1s and 0s (or custom characters).

**Parameters:**

- `options` (Object, optional): Configuration options
  - `options.text` (string): The text to display
  - `options.caseSensitive` (boolean): Preserve original case
  - `options.letterSpacing` (number): Spaces between letters
  - `options.fillChar` (string): Character for filled pixels
  - `options.emptyChar` (string): Character for empty pixels

**Returns:** void (prints to console)

**Example:**

```javascript
fancyHelloWorld({
  text: "hello",
  fillChar: "*",
  emptyChar: ".",
  letterSpacing: 2,
});
```

## License

MIT

## Contributing

Feel free to submit issues and pull requests to add more letters or features!
