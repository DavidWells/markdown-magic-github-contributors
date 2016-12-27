const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {}

const markdownPath = path.join(__dirname, 'README.md')
markdownMagic(markdownPath, config)