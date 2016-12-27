const contributors = require('github-contributors')
const merge = require('deepmerge')
const gitRemoteUrl = require('remote-origin-url')
const format = require('github-url-from-git')

const defaultOptions = {
  format: 'table',
}

let globalOptions = {} // default

module.exports = function(content, options, config) {

  // args set in config transform
  if (content && typeof content === 'object') {
    // content is not string but a options for the plugin
    globalOptions = content
  }

  return function githubContibutors(content, options, config) {
    const userOptions = options || {}
    const mergedOptions = merge(globalOptions, userOptions)
    // console.log('mergedOptions', mergedOptions)
    let repo = mergedOptions.repo
    let contribs

    if(!repo) {
      const gitRemote = gitRemoteUrl.sync()
      repo = format(gitRemote).split('https://github.com/')
      repo = repo[1]
    }
    // Add in github tokens if you are hitting rate limits
    if (process.env.CLIENT_ID) {
      defaultOptions.id = process.env.CLIENT_ID
    }
    if (process.env.CLIENT_SECRET) {
      defaultOptions.secret = process.env.CLIENT_SECRET
    }

    const contributorsOpts = merge(defaultOptions, mergedOptions)

    // console.log('repo', repo)
    // console.log('options', contributorsOpts)
    // Get repo contributors sync
    contributors(repo, contributorsOpts, function(err, res) {
      if (err) console.log(err);
      contribs = res
    });
    while(contribs === undefined) {
      require('deasync').sleep(100);
    }
    return contribs;
  }
}

