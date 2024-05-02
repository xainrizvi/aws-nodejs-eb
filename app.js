// Load the AWS SDK
var AWS = require('aws-sdk');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

// Set region for AWS SDKs
AWS.config.region = process.env.REGION;

// Create an S3 instance
var s3 = new AWS.S3();

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));

// Configure multer for handling multipart/form-data
var upload = multer({ dest: 'uploads/' });

// Render form to upload image
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Upload Image'
    });
});

// Handle image upload
app.post('/upload', upload.single('image'), function(req, res) {
    // File info
    var file = req.file;
    
    // S3 parameters
    var params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ACL: 'public-read' // Make the uploaded file publicly accessible
    };

    // Upload file to S3
    s3.upload(params, function(err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error uploading file to S3');
        }
        console.log('File uploaded successfully:', data.Location);
        res.send('File uploaded successfully. <a href="' + data.Location + '">View Image</a>');
    });
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});

/*
	
		
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


*/
