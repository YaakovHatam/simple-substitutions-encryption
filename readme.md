# Simple 

## Usage example
```javascript
const secret = require('./secret');

const str = 'Hello Omar! how are you...';

console.log(secret.encode(str)); // Svool Lnzi! sld ziv blf...
console.log(secret.decode('Svool Lnzi! sld ziv blf...')); // Hello Omar! how are you...

```