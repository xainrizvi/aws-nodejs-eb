		
// Load the AWS SDK
var AWS = require('aws-sdk')

var express = require('express')
var bodyParser = require('body-parser')

// Set region for AWS SDKs
AWS.config.region = process.env.REGION

var app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function (req, res) {
  res.render('index', {
    title: 'aarish and zain hardworking panotoi hahahh maehan nata ahabsjks,cbdsacjaslcxbax,xbxlancakxcnlxnclxkacjxhc xznc zpxjc kxbczxlcn xzlnc xzlnzxkjc bzxlbzxljb klzlxhzx zxlkc nxzlk jxzlk nzx nzxlmcx;cm xzlkm zxkl n;zn'
    })
    res.status(200).end();
})

var port = process.env.PORT || 3000

var server = app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:' + port + '/')
})
