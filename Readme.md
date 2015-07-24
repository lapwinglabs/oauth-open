
# oauth-open

  minimal popup for authenticating with oauth

## Installation

```
npm install oauth-open
```

## Usage

```js
var open = require('oauth-open');

open('https://www.facebook.com/v2.3/dialog/oauth?...', function(err, code) {
  if (err) throw err;
  console.log(code)
});
```

## API

### `open(url, options, fn)`

Open a popup and go to the following `url`, calling `fn` when the flow is complete.

Available `options` include:

- name: name of the window
- width: width of the popup
- height: height of the popup
- left: position of the popup
- top: position of the popup

## Credits

Extracted from the [satellizer](https://github.com/sahat/satellizer) project.

## License

(The MIT License)

Copyright (c) 2015 Matthew Mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
