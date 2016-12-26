# List Github Contributors Plugin

This [markdown-magic](https://github.com/DavidWells/markdown-magic) will list out the contributors of your repository.

## Usage

```js
const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    CONTRIBUTORS: require('markdown-magic-github-contributors')
  }
}

const markdownPath = path.join(__dirname, 'README.md')
markdownMagic(markdownPath, config)
```

## Usage in markdown

```md
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (CONTRIBUTORS) -->
table will be placed here
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->
```

## Prior Art

Many thanks to [jonschlinkert](https://github.com/jonschlinkert/) and his [github-contributors](https://github.com/jonschlinkert/github-contributors) package that powers this under the hood.