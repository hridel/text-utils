# @hridel/text-utils

A collection of utility functions for text manipulation.

## Installation

```sh
npm install @hridel/text-utils
```

## Usage

```typescript
import { capitalize, capitalizeEachWord, slug, ascii } from '@hridel/text-utils';
```

### Functions

#### `capitalize`

Capitalize the first letter of a string.

**Parameters:**
- `text` (string): The input string.

**Returns:**
- (string): The capitalized string.

**Example:**

```typescript
import { capitalize } from '@hridel/text-utils';

console.log(capitalize('hello world')); // Output: 'Hello world'
```

#### `capitalizeEachWord`

Capitalize each word in a string.

**Parameters:**
- `text` (string): The input string.

**Returns:**
- (string): The string with each word capitalized.

**Example:**

```typescript
import { capitalizeEachWord } from '@hridel/text-utils';

console.log(capitalizeEachWord('hello world')); // Output: 'Hello World'
```

#### `slug`

Convert a string to a slug.

**Parameters:**
- `title` (string): The input string.
- `separator` (string, optional): The separator to use in the slug. Default is `'-'`.
- `dictionary` (object, optional): A dictionary of replacements. Default is `{'@': 'at'}`.

**Returns:**
- (string): The slugified string.

**Example:**

```typescript
import { slug } from '@hridel/text-utils';

console.log(slug('Hello World!')); // Output: 'hello-world'
console.log(slug('Hello@World', '_', {'@': 'at'})); // Output: 'hello_at_world'
```

#### `ascii`

Remove accents from a string.

**Parameters:**
- `text` (string): The input string.

**Returns:**
- (string): The string with accents removed.

**Example:**

```typescript
import { ascii } from '@hridel/text-utils';

console.log(ascii('café')); // Output: 'cafe'
```

### `stripHtmlTags`

Removes all HTML tags from the input string and returns plain text.

**Parameters:**
- `html` (string): The HTML string to be stripped of tags.

**Returns:**
- (string): The plain text without any HTML tags.

**Example:**

```typescript
import { stripHtmlTags } from '@hridel/text-utils';

console.log(stripHtmlTags('<p>Hello <strong>World</strong>!</p>')); // Output: 'Hello World!'
```


### `shortenText`

Shortens the given text to a specified maximum length, ensuring that words are not split.

**Parameters:**
- `text` (string): The text to be shortened.
- `maxLength` (number): The maximum length of the shortened text.
- `addEllipsis` (boolean, optional): Indicates whether to add ellipsis (…) at the end. Default is `true`.

**Returns:**
- (string): The shortened text.

**Example:**

```typescript
import { shortenText } from '@hridel/text-utils';

const originalText = "This is an example of a long sentence that needs to be shortened.";
const shortenedText = shortenText(originalText, 25);
console.log(shortenedText); // Output: "This is an example…"
```


## License

This project is licensed under the Apache-2.0 License.