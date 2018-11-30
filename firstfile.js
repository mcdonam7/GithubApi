console.log('heyyy');
var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})
var repoArray = []



github.repos.getAll(
{
}

);