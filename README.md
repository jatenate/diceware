# A simple diceware module

`diceware` generates passphrases using the [diceware method](http://world.std.com/~reinhold/diceware.html).

It's worth noting that [it's not recommended](http://world.std.com/~reinhold/dicewarefaq.html#electronic) to use a computer to generate a Diceware phrase. If you want to generate passphrases in node.js, check out [https://github.com/shimaore/password](https://github.com/shimaore/password) instead.

```
    npm install diceware
```

```
    diceware = require('diceware');
    console.log(diceware());   // by default generates a 5 word phrase
    console.log(diceware(10)); // but number of words can optionally be specified
```