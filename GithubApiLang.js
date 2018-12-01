// Global Arrays
var repoLang = []
var instances = []
var checkedLang = []
var csvArray = []
var headersArray = [2]

// CSV Code
var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('PieChartData1.csv');

github.authenticate({
      type: 'oauth',
      token: 'X'
})

github.repos.getAll(
{
      username: 'mcdonam7'
},    function (err, res) {
      if (err) throw err

      // Define headers for CSV file.
      headersArray[0] = "Language"
      headersArray.push("Instances")

      // Push repository languages in repoLang array.
      for (var x=0; x<res.data.length; x++){
            repoLang.push(res.data[x].language)
      }
