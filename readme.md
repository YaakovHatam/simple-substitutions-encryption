# Simple 

## Usage example
```javascript
const secret = require('secret');

const str = 'Hello Omar! how are you...';

secret.encode(str, function(err, data) {
    if (err) console.log(err)
    else console.log(data); // Svool Lnzi! sld ziv blf...
});

secret.decode('Svool Lnzi! sld ziv blf...', function(err, data) {
    if (err) console.log(err)
    else console.log(data);  // Hello Omar! how are you...
});

```