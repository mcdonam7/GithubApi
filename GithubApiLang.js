
var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})

// Global Arrays
var repoLang = []
var instances = []
var checkedLang = []
var csvArray = []
var headersArray = [2]
