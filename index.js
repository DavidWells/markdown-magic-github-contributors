const contributors = require('github-contributors')
const merge = require('deepmerge')
const deAsync = require('deasync')
const gitRemoteUrl = require('remote-origin-url')
const format = require('github-url-from-git')

const defaultOptions = {
  format: 'table',
}

module.exports = function(pluginOptions) {
  return function githubContibutors(content, options, config) {
    const userOptions = pluginOptions || {}
    let repo = userOptions.repo
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

    const opts = merge(defaultOptions, userOptions)

    // Get repo contributors
    contributors(repo, opts, function(err, res) {
      if (err) console.log(err);
      contribs = res
    });
    while(contribs === undefined) {
      deAsync.runLoopOnce();
    }
    return contribs;
  }
}

