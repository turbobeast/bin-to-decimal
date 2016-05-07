# bin-to-decimal

[![Build Status](https://travis-ci.org/turbobeast/bin-to-decimal.svg)](https://travis-ci.org/turbobeast/bin-to-decimal)

converts binary numbers into decimal (base 10)

```javascript

var binToDecimal = require('bin-to-decimal');
var dec = binToDecimal('100111100110101'); // 20277
```

Don't get excited about this. This was an exercise. You should just do.

```javascript
let bin = 1010101;
let dec = parseInt((bin).toString(), 2); // 85
```
