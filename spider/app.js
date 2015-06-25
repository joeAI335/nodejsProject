var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res){
    request('http://www.1point3acres.com/bbs/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load('<h2 class="title">Hello world</h2>');
      res.json({
        'Classnum': 1
      }); 
    }
  })
});

app.listen(3000);

