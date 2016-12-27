import fs from 'fs-extra'
import path from 'path'
import test from 'ava'
import markdownMagic from 'markdown-magic'

const inputDir = path.join(__dirname, 'fixtures')
const outputDir = path.join(__dirname, 'fixtures', 'output')

/**
 * Test Formats
 */
test('format:list', t => {
  const filePath = path.join(inputDir, 'test.md')
  const newfile = path.join(outputDir, 'test.md')

  const config = {
    outputDir: outputDir,
    transforms: {
      CONTRIBUTORS: require('../index')({format: 'list'})
    }
  }

  markdownMagic(filePath, config, function(err, data) {
    // console.log('data', data)
    const newContent = fs.readFileSync(newfile, 'utf8')
    // check local code
    t.regex(newContent, /\+/, 'list not found')
  })

  fs.emptyDirSync(outputDir)
})

test('format:table', t => {
  const filePath = path.join(inputDir, 'test.md')
  const newfile = path.join(outputDir, 'test.md')

  const config = {
    outputDir: outputDir,
    transforms: {
      CONTRIBUTORS: require('../index')({format: 'table'})
    }
  }

  markdownMagic(filePath, config, function(err, data) {
    // console.log('data', data)
    const newContent = fs.readFileSync(newfile, 'utf8')
    // check local code
    t.regex(newContent, /\|/, 'table not found')
  })

  fs.emptyDirSync(outputDir)
})

test('format:aligned', t => {
  const filePath = path.join(inputDir, 'test.md')
  const newfile = path.join(outputDir, 'test.md')

  const config = {
    outputDir: outputDir,
    transforms: {
      CONTRIBUTORS: require('../index')({format: 'aligned'})
    }
  }

  markdownMagic(filePath, config, function(err, data) {
    // console.log('data', data)
    const newContent = fs.readFileSync(newfile, 'utf8')
    // check local code
    t.regex(newContent, /-------/, 'aligned format not found')
  })

  fs.emptyDirSync(outputDir)
})
