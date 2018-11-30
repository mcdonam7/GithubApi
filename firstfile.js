console.log('heyyy');
var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})
var repoArray = []

github.authenticate({
  type: 'oauth',
  token: 'a276a582c2ea9b7d5ab162e0c75eb0719613145e'
})

github.repos.getAll(
{
}

);