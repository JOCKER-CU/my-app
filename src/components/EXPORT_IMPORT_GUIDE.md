# React Export & Import Guide

This guide demonstrates the different ways to export and import components in React/JavaScript.

## Files Created

1. **DefaultExportExample.js** - Shows default export
2. **NamedExportExample.js** - Shows named exports
3. **MixedExportExample.js** - Shows both default and named exports
4. **ExportImportDemo.js** - Main demo component that imports and uses all examples

---

## 1. Default Export

### What is it?
- Only **ONE** default export per file
- Can be imported with **any name** you choose
- No curly braces `{}` needed when importing

### Example: DefaultExportExample.js

**Exporting:**
```javascript
function UserProfile({ name, age, occupation }) {
  return <div>...</div>;
}

export default UserProfile;

// Alternative syntax:
// export default function UserProfile() { ... }
```

**Importing:**
```javascript
import UserProfile from './DefaultExportExample';

// You can use ANY name:
import User from './DefaultExportExample';  // Also works!
import MyComponent from './DefaultExportExample';  // Also works!
```

---

## 2. Named Exports

### What is it?
- **MULTIPLE** named exports per file
- Must be imported with the **exact same name** (or use alias)
- Requires curly braces `{}` when importing

### Example: NamedExportExample.js

**Exporting:**
```javascript
// Named export #1
export function ProductCard({ name, price }) {
  return <div>...</div>;
}

// Named export #2
export function ProductList({ products }) {
  return <div>...</div>;
}

// Named export #3 - constant
export const TAX_RATE = 0.08;

// Named export #4 - function
export const calculateTotal = (products) => {
  return products.reduce((total, p) => total + p.price, 0);
};
```

**Importing:**
```javascript
// Must use exact names in curly braces
import { ProductCard, ProductList } from './NamedExportExample';

// Import only what you need
import { ProductList } from './NamedExportExample';

// Import with alias (rename)
import { ProductCard as Product } from './NamedExportExample';

// Import all
import { ProductCard, ProductList, TAX_RATE, calculateTotal } from './NamedExportExample';
```

---

## 3. Mixed Exports (Default + Named)

### What is it?
- **ONE** default export + **MULTIPLE** named exports in the same file
- Combines both patterns

### Example: MixedExportExample.js

**Exporting:**
```javascript
// Named export - helper component
export function BookRating({ rating }) {
  return <span>⭐⭐⭐</span>;
}

// Named export - constant
export const GENRES = ['Fiction', 'Non-Fiction', 'Mystery'];

// Default export - main component
function BookCard({ title, author }) {
  return <div>...</div>;
}

export default BookCard;
```

**Importing:**
```javascript
// Default first (no braces), then named exports (with braces)
import BookCard, { BookRating, GENRES } from './MixedExportExample';

// Just the default
import BookCard from './MixedExportExample';

// Just named exports
import { BookRating, GENRES } from './MixedExportExample';
```

---

## 4. Advanced Import Techniques

### Import with Alias
```javascript
import { ProductCard as Product } from './NamedExportExample';
// Now use it as: <Product />
```

### Import All as Namespace
```javascript
import * as BookComponents from './MixedExportExample';

// Usage:
<BookComponents.default />  // The default export
<BookComponents.BookRating rating={5} />  // Named export
console.log(BookComponents.GENRES);  // Named export constant
```

### Import Multiple from Different Files
```javascript
import UserProfile from './DefaultExportExample';
import { ProductList } from './NamedExportExample';
import BookCard, { GENRES } from './MixedExportExample';
```

---

## Quick Reference Table

| Export Type | Export Syntax | Import Syntax | Notes |
|------------|--------------|---------------|-------|
| **Default** | `export default Component;` | `import Component from './file';` | Only 1 per file. Can import with any name. |
| **Named** | `export function Component() {}` | `import { Component } from './file';` | Multiple per file. Must use exact name. |
| **Named (Alias)** | `export function Component() {}` | `import { Component as C } from './file';` | Rename on import using 'as'. |
| **Mixed** | `export default A;`<br>`export const B = ...;` | `import A, { B } from './file';` | 1 default + multiple named. |
| **All as Namespace** | `export default A;`<br>`export const B = ...;` | `import * as All from './file';` | Use All.default, All.B |

---

## Best Practices

### When to use Default Export:
- When the file has **one primary component/function**
- For React components that are the main purpose of the file
- Example: A component file that exports only that component

### When to use Named Exports:
- When the file exports **multiple related items**
- For utility functions, constants, or helper functions
- When you want to enforce specific naming (prevents renaming confusion)
- Example: A utilities file with multiple helper functions

### When to use Mixed Exports:
- When you have **one main component** plus **helper functions/constants**
- Example: A Button component (default) with button variants and constants (named)

---

## Common Patterns in React

### Pattern 1: Component-Only File
```javascript
// Button.js
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
```

### Pattern 2: Utilities File
```javascript
// utils.js
export const formatDate = (date) => { ... };
export const formatCurrency = (amount) => { ... };
export const validateEmail = (email) => { ... };
```

### Pattern 3: Component with Constants
```javascript
// Alert.js
export const ALERT_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning'
};

function Alert({ type, message }) {
  return <div className={type}>{message}</div>;
}

export default Alert;
```

---

## How to Run the Examples

1. Start your React app: `npm start`
2. The `ExportImportDemo` component will be displayed at the top of the page
3. It demonstrates all three export types with working examples
4. Check the browser console for any errors

## Files Structure

```
src/
  components/
    ├── DefaultExportExample.js    (Default export example)
    ├── NamedExportExample.js      (Named exports example)
    ├── MixedExportExample.js      (Mixed exports example)
    ├── ExportImportDemo.js        (Main demo component)
    └── EXPORT_IMPORT_GUIDE.md     (This guide)
```

---

## Summary

- **Default Export**: One per file, import with any name
- **Named Export**: Multiple per file, import with exact names
- **Mixed Export**: Combine both in one file
- Use curly braces `{}` for named imports, not for default imports
- You can mix and match import styles as needed

Happy coding! 🚀

