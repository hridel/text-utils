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

## License

This project is licensed under the Apache-2.0 License.