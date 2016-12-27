# List Github Contributors Plugin

This [markdown-magic](https://github.com/DavidWells/markdown-magic) will list out the contributors of your repository.

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC) -->
- [Install](#install)
- [Usage](#usage)
  * [Add markdown-magic transform script](#add-markdown-magic-transform-script)
  * [Add comment block in markdown](#add-comment-block-in-markdown)
- [Options](#options)
- [Setting options](#setting-options)
  * [Global configuration](#global-configuration)
  * [Inline configuration](#inline-configuration)
- [Prior Art](#prior-art)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## Install

```bash
npm i markdown-magic markdown-magic-github-contributors --save-dev
```

## Usage

### Add markdown-magic transform script

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

### Add comment block in markdown

```md
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (CONTRIBUTORS) -->
table will be placed here
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->
```

## Options

`repo` *(string)* (optional) - `username/repoName`. Will use the current working directory git remote origin as a default.

`format` *(string)* (optional) - Default is table. possible values: `list`, `aligned`, & `table`. [See example](https://github.com/jonschlinkert/github-contributors#formatted-list)

## Setting options


### Global configuration

You can configure the plugin when required in as a tranform. This will apply to all instances of the `<!-- ⛔️ AUTO-GENERATED-CONTENT (CONTRIBUTORS) -->` comment, unless overriden inline.

```js
const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    CONTRIBUTORS: require('markdown-magic-github-contributors')({
      format: 'list'
    })
  }
}

const markdownPath = path.join(__dirname, 'README.md')
markdownMagic(markdownPath, config)
```

### Inline configuration

You can override global config settings with inline options like so:

```md
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (CONTRIBUTORS:format=list) -->
table will be placed here
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->
```

## Prior Art

Many thanks to [jonschlinkert](https://github.com/jonschlinkert/) and his [github-contributors](https://github.com/jonschlinkert/github-contributors) package that powers this under the hood.