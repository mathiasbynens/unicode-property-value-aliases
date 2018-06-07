# unicode-property-value-aliases [![Build status](https://travis-ci.org/mathiasbynens/unicode-property-value-aliases.svg?branch=master)](https://travis-ci.org/mathiasbynens/unicode-property-value-aliases)

_unicode-property-value-aliases_ offers the Unicode property value alias mappings in an easy-to-consume JavaScript format.

It’s based on [the `PropertyValueAliases.txt` data for Unicode v11.0.0](https://unicode.org/Public/11.0.0/ucd/PropertyValueAliases0d16.txt).

For the subset used by Unicode RegExp property escapes in ECMAScript, [see _unicode-property-value-aliases-ecmascript_](https://github.com/mathiasbynens/unicode-property-value-aliases-ecmascript).

## Installation

To use _unicode-property-value-aliases_ programmatically, install it as a dependency via [npm](https://www.npmjs.com/):

```bash
$ npm install unicode-property-value-aliases
```

Then, `require` it:

```js
const propertyValueAliases = require('unicode-property-value-aliases');
```

## Usage

This module exports a `Map` object of which the keys are canonical property names and the values are `Map`s from property value aliases to canonical property value names. The most common usage is to convert a property value alias to its canonical form:

```js
propertyValueAliases.get(property).get(propertyValue)
```

Examples:

```js
propertyValueAliases.get('Bidi_Class').get('AL')
// → 'Arabic_Letter'

propertyValueAliases.get('Block').get('Alphabetic_PF')
// → 'Alphabetic_Presentation_Forms'

propertyValueAliases.get('Canonical_Combining_Class').get('KV')
// → 'Kana_Voicing'
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_unicode-property-value-aliases_ is available under the [MIT](https://mths.be/mit) license.
