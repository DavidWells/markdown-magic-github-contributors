# List Github Contributors Plugin

This [markdown-magic](https://github.com/DavidWells/markdown-magic) will list out the contributors of your repository.

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC) -->
- [Usage](#usage)
- [Usage in markdown](#usage-in-markdown)
- [Usage with options](#usage-with-options)
- [Options](#options)
- [Prior Art](#prior-art)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

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

## Usage with options

```js
const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    CONTRIBUTORS: require('markdown-magic-github-contributors')({
      repo: 'userName/repoName', // specify different repo than cwd
      format: 'list'
    })
  }
}

const markdownPath = path.join(__dirname, 'README.md')
markdownMagic(markdownPath, config)
```

## Options

`repo` *(string)* (optional) - `username/repoName`. Will use the current working directory git remote origin as a default.

`format` *(string)* (optional) - Default is table. possible values: `list`, `aligned`, & `table`. [See example](https://github.com/jonschlinkert/github-contributors#formatted-list)

## Prior Art

Many thanks to [jonschlinkert](https://github.com/jonschlinkert/) and his [github-contributors](https://github.com/jonschlinkert/github-contributors) package that powers this under the hood.